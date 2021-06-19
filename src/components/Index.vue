<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="API" v-if="false">
        <el-input
          v-model="form.API"
          placeholder="https://explorer.epik-protocol.io/api/miner?id="
        ></el-input>
      </el-form-item>
      <el-form-item label="MinerIDS">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="MinerID,多个用,隔开，建议每次查询不超过50个"
          v-model="form.MinerIDS"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          v-loading.fullscreen.lock="fullscreenLoading"
          >立即查询</el-button
        >
      </el-form-item>
    </el-form>
    <h3>
      总出块数：{{ SumWinBlocks }}，全网有效总算力：{{
        (SumTotalPower / 1024 / 1024 / 1024 / 1024).toFixed(2)
      }}
      Ti，矿工有效总算力：{{
        (SumPower / 1024 / 1024 / 1024).toFixed(2)
      }}
      GB，算力总占比：{{
        SumTotalPower == 0 ? 0 : ((SumPower / SumTotalPower) * 100).toFixed(2)
      }}%，矿工数：{{ SumTotalMinerCount }}，总奖励：{{ SumTotalRewards }} EPK
    </h3>
    <el-table :data="tableData" height="600" border style="width: 100%">
      <el-table-column prop="MinerID" label="矿工账号" width="180">
      </el-table-column>
      <el-table-column prop="Owner" label="Owner" width="180">
      </el-table-column>
      <el-table-column prop="Worker" label="Worker"> </el-table-column>
      <el-table-column prop="Coinbase" label="Coinbase"> </el-table-column>
      <el-table-column prop="MinerPower_QualityAdjPower" label="矿工有效算力">
      </el-table-column>
      <el-table-column prop="MinerPower_RawBytePower" label="矿工原值算力">
      </el-table-column>
      <el-table-column prop="MinerPower_Percent" label="算力占比">
      </el-table-column>
      <el-table-column prop="WinBlocks" label="总出快数"> </el-table-column>
      <el-table-column prop="TotalRewards" label="总奖励"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMinerInfo } from "@/api/api";
import { Message } from "element-ui";
export default {
  data() {
    return {
      fullscreenLoading: false,
      form: {
        MinerIDS: "",
        API: "",
      },
      SumWinBlocks: 0,
      SumPower: 0,
      SumTotalPower: 0,
      SumTotalRewards: 0,
      SumTotalMinerCount: 0,
      tableData: [],
    };
  },
  methods: {
    onSubmit() {
      let that = this;
      if (this.form.MinerIDS) {
        this.fullscreenLoading = true;
        that.tableData = [];
        that.SumWinBlocks = 0;
        that.SumPower = 0;
        that.SumTotalPower = 0;
        that.SumTotalRewards = 0;
        that.SumTotalMinerCount = 0;
        let MinerIDS = this.form.MinerIDS.split(",");
        MinerIDS.forEach((miner) => {
          if (miner != "" && miner.toLowerCase().indexOf("f") == 0) {
            (function (miner) {
              getMinerInfo({
                data: { id: miner },
                success(minerInfo) {
                  console.log(minerInfo);
                  let WinBlocks = minerInfo.miner.WinBlocks;
                  let Worker = minerInfo.miner.Worker;
                  let Owner = minerInfo.miner.Owner;
                  let Coinbase = minerInfo.miner.Coinbase;
                  let OwnerAddress = minerInfo.miner.OwnerAddress;

                  let MinerPower_RawBytePower =
                    minerInfo.miner.MinerPower.RawBytePower;
                  let MinerPower_QualityAdjPower =
                    minerInfo.miner.MinerPower.QualityAdjPower;
                  let TotalPower_RawBytePower =
                    minerInfo.miner.TotalPower.RawBytePower;
                  let TotalPower_QualityAdjPower =
                    minerInfo.miner.TotalPower.QualityAdjPower;
                  let TotalRewards = minerInfo.miner.TotalRewards;

                  //转换成GB
                  let d1_MinerPower_RawBytePower_d =
                    MinerPower_RawBytePower / 1024 / 1024 / 1024;
                  let d1_MinerPower_QualityAdjPower_d =
                    MinerPower_QualityAdjPower / 1024 / 1024 / 1024;
                  let d1_TotalPower_RawBytePower_d =
                    TotalPower_RawBytePower / 1024 / 1024 / 1024 / 1024;
                  let d1_TotalPower_QualityAdjPower_d =
                    TotalPower_QualityAdjPower / 1024 / 1024 / 1024 / 1024;

                  let rawStr = " GB";
                  let AdjStr = " GB";

                  if (d1_MinerPower_RawBytePower_d < 1) {
                    d1_MinerPower_RawBytePower_d =
                      MinerPower_RawBytePower / 1024 / 1024;
                    rawStr = " MB";
                  }
                  if (d1_MinerPower_QualityAdjPower_d < 1) {
                    d1_MinerPower_QualityAdjPower_d =
                      MinerPower_QualityAdjPower / 1024 / 1024;
                    AdjStr = " MB";
                  }

                  let MinerPower_Percent =
                    parseFloat(
                      (MinerPower_QualityAdjPower /
                        TotalPower_QualityAdjPower) *
                        100
                    ).toFixed(4) + "%";
                  that.SumPower += parseFloat(MinerPower_QualityAdjPower);
                  that.SumTotalPower = parseFloat(TotalPower_QualityAdjPower);
                  that.SumTotalRewards += parseFloat(TotalRewards);
                  that.SumWinBlocks += parseInt(WinBlocks);
                  that.SumTotalMinerCount += 1;
                  if (that.SumTotalMinerCount >= MinerIDS.length - 5) {
                    that.fullscreenLoading = false;
                  }

                  that.tableData.push({
                    MinerID: miner,
                    Owner: Owner,
                    Worker: Worker,
                    Coinbase: Coinbase,
                    MinerPower_QualityAdjPower:
                      d1_MinerPower_QualityAdjPower_d.toFixed(2) + AdjStr,
                    MinerPower_RawBytePower:
                      d1_MinerPower_RawBytePower_d.toFixed(2) + rawStr,
                    MinerPower_Percent: MinerPower_Percent,
                    WinBlocks: WinBlocks,
                    TotalRewards: TotalRewards + " EPK",
                  });
                },
              });
            })(miner);
          }
        });
      } else {
        Message.error("请输入MinerIDS,多个用,隔开，建议每次查询不超过50个");
      }
    },
  },
};
</script>
