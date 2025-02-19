var TestConfig = {
  "TestName": "Speech Similarity Evaluation",
  "RateScalePng": "img/similar_scale.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":50,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "shoinoue@link.cuhk.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets":
[
  {
    "Name": "1272_128104_000003_000005",
    "TestID": "SIM---1272_128104_000003_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1272/128104/1272_128104_000003_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1272/128104/1272_128104_000003_000005.wav",
    }
  },
  {
    "Name": "1272_128104_000005_000000",
    "TestID": "SIM---1272_128104_000005_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1272/128104/1272_128104_000005_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1272/128104/1272_128104_000005_000000.wav",
    }
  },
  {
    "Name": "1272_135031_000052_000001",
    "TestID": "SIM---1272_135031_000052_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1272/135031/1272_135031_000052_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1272/135031/1272_135031_000052_000001.wav",
    }
  },
  {
    "Name": "1272_135031_000058_000000",
    "TestID": "SIM---1272_135031_000058_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1272/135031/1272_135031_000058_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1272/135031/1272_135031_000058_000000.wav",
    }
  },
  {
    "Name": "1272_141231_000031_000000",
    "TestID": "SIM---1272_141231_000031_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1272/141231/1272_141231_000031_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1272/141231/1272_141231_000031_000000.wav",
    }
  },
  {
    "Name": "1462_170138_000007_000004",
    "TestID": "SIM---1462_170138_000007_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170138/1462_170138_000007_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170138/1462_170138_000007_000004.wav",
    }
  },
  {
    "Name": "1462_170138_000022_000012",
    "TestID": "SIM---1462_170138_000022_000012",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170138/1462_170138_000022_000012.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170138/1462_170138_000022_000012.wav",
    }
  },
  {
    "Name": "1462_170142_000024_000002",
    "TestID": "SIM---1462_170142_000024_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170142/1462_170142_000024_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170142/1462_170142_000024_000002.wav",
    }
  },
  {
    "Name": "1462_170142_000043_000006",
    "TestID": "SIM---1462_170142_000043_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170142/1462_170142_000043_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170142/1462_170142_000043_000006.wav",
    }
  },
  {
    "Name": "1462_170145_000006_000001",
    "TestID": "SIM---1462_170145_000006_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170145/1462_170145_000006_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170145/1462_170145_000006_000001.wav",
    }
  },
  {
    "Name": "1462_170145_000011_000000",
    "TestID": "SIM---1462_170145_000011_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170145/1462_170145_000011_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170145/1462_170145_000011_000000.wav",
    }
  },
  {
    "Name": "1462_170145_000031_000001",
    "TestID": "SIM---1462_170145_000031_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170145/1462_170145_000031_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170145/1462_170145_000031_000001.wav",
    }
  },
  {
    "Name": "1462_170145_000031_000002",
    "TestID": "SIM---1462_170145_000031_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1462/170145/1462_170145_000031_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1462/170145/1462_170145_000031_000002.wav",
    }
  },
  {
    "Name": "174_168635_000030_000001",
    "TestID": "SIM---174_168635_000030_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/168635/174_168635_000030_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/168635/174_168635_000030_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/168635/174_168635_000030_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/168635/174_168635_000030_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/168635/174_168635_000030_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/168635/174_168635_000030_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/168635/174_168635_000030_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/168635/174_168635_000030_000001.wav",
    }
  },
  {
    "Name": "174_168635_000042_000002",
    "TestID": "SIM---174_168635_000042_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/168635/174_168635_000042_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/168635/174_168635_000042_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/168635/174_168635_000042_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/168635/174_168635_000042_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/168635/174_168635_000042_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/168635/174_168635_000042_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/168635/174_168635_000042_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/168635/174_168635_000042_000002.wav",
    }
  },
  {
    "Name": "174_50561_000001_000008",
    "TestID": "SIM---174_50561_000001_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/50561/174_50561_000001_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/50561/174_50561_000001_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/50561/174_50561_000001_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/50561/174_50561_000001_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/50561/174_50561_000001_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/50561/174_50561_000001_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/50561/174_50561_000001_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/50561/174_50561_000001_000008.wav",
    }
  },
  {
    "Name": "174_84280_000003_000003",
    "TestID": "SIM---174_84280_000003_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/84280/174_84280_000003_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/84280/174_84280_000003_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/84280/174_84280_000003_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/84280/174_84280_000003_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/84280/174_84280_000003_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/84280/174_84280_000003_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/84280/174_84280_000003_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/84280/174_84280_000003_000003.wav",
    }
  },
  {
    "Name": "174_84280_000004_000003",
    "TestID": "SIM---174_84280_000004_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/84280/174_84280_000004_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/84280/174_84280_000004_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/84280/174_84280_000004_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/84280/174_84280_000004_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/84280/174_84280_000004_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/84280/174_84280_000004_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/84280/174_84280_000004_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/84280/174_84280_000004_000003.wav",
    }
  },
  {
    "Name": "174_84280_000016_000000",
    "TestID": "SIM---174_84280_000016_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/174/84280/174_84280_000016_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/174/84280/174_84280_000016_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/174/84280/174_84280_000016_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/174/84280/174_84280_000016_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/174/84280/174_84280_000016_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/174/84280/174_84280_000016_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/174/84280/174_84280_000016_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/174/84280/174_84280_000016_000000.wav",
    }
  },
  {
    "Name": "1919_142785_000020_000006",
    "TestID": "SIM---1919_142785_000020_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1919/142785/1919_142785_000020_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1919/142785/1919_142785_000020_000006.wav",
    }
  },
  {
    "Name": "1919_142785_000035_000002",
    "TestID": "SIM---1919_142785_000035_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1919/142785/1919_142785_000035_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1919/142785/1919_142785_000035_000002.wav",
    }
  },
  {
    "Name": "1988_147956_000002_000000",
    "TestID": "SIM---1988_147956_000002_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/147956/1988_147956_000002_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/147956/1988_147956_000002_000000.wav",
    }
  },
  {
    "Name": "1988_24833_000005_000000",
    "TestID": "SIM---1988_24833_000005_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000005_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000005_000000.wav",
    }
  },
  {
    "Name": "1988_24833_000006_000002",
    "TestID": "SIM---1988_24833_000006_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000006_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000006_000002.wav",
    }
  },
  {
    "Name": "1988_24833_000009_000002",
    "TestID": "SIM---1988_24833_000009_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000009_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000009_000002.wav",
    }
  },
  {
    "Name": "1988_24833_000019_000001",
    "TestID": "SIM---1988_24833_000019_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000019_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000019_000001.wav",
    }
  },
  {
    "Name": "1988_24833_000050_000001",
    "TestID": "SIM---1988_24833_000050_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000050_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000050_000001.wav",
    }
  },
  {
    "Name": "1988_24833_000058_000000",
    "TestID": "SIM---1988_24833_000058_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000058_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000058_000000.wav",
    }
  },
  {
    "Name": "1988_24833_000062_000000",
    "TestID": "SIM---1988_24833_000062_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1988/24833/1988_24833_000062_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1988/24833/1988_24833_000062_000000.wav",
    }
  },
  {
    "Name": "1993_147149_000022_000002",
    "TestID": "SIM---1993_147149_000022_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1993/147149/1993_147149_000022_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1993/147149/1993_147149_000022_000002.wav",
    }
  },
  {
    "Name": "1993_147149_000036_000000",
    "TestID": "SIM---1993_147149_000036_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1993/147149/1993_147149_000036_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1993/147149/1993_147149_000036_000000.wav",
    }
  },
  {
    "Name": "1993_147149_000043_000000",
    "TestID": "SIM---1993_147149_000043_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1993/147149/1993_147149_000043_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1993/147149/1993_147149_000043_000000.wav",
    }
  },
  {
    "Name": "1993_147964_000005_000009",
    "TestID": "SIM---1993_147964_000005_000009",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1993/147964/1993_147964_000005_000009.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1993/147964/1993_147964_000005_000009.wav",
    }
  },
  {
    "Name": "1993_147964_000008_000000",
    "TestID": "SIM---1993_147964_000008_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/1993/147964/1993_147964_000008_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/1993/147964/1993_147964_000008_000000.wav",
    }
  },
  {
    "Name": "2035_147960_000004_000009",
    "TestID": "SIM---2035_147960_000004_000009",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147960/2035_147960_000004_000009.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147960/2035_147960_000004_000009.wav",
    }
  },
  {
    "Name": "2035_147960_000007_000001",
    "TestID": "SIM---2035_147960_000007_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147960/2035_147960_000007_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147960/2035_147960_000007_000001.wav",
    }
  },
  {
    "Name": "2035_147961_000004_000005",
    "TestID": "SIM---2035_147961_000004_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000004_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000004_000005.wav",
    }
  },
  {
    "Name": "2035_147961_000007_000006",
    "TestID": "SIM---2035_147961_000007_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000007_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000007_000006.wav",
    }
  },
  {
    "Name": "2035_147961_000009_000004",
    "TestID": "SIM---2035_147961_000009_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000009_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000009_000004.wav",
    }
  },
  {
    "Name": "2035_147961_000013_000000",
    "TestID": "SIM---2035_147961_000013_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000013_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000013_000000.wav",
    }
  },
  {
    "Name": "2035_147961_000013_000008",
    "TestID": "SIM---2035_147961_000013_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000013_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000013_000008.wav",
    }
  },
  {
    "Name": "2035_147961_000015_000001",
    "TestID": "SIM---2035_147961_000015_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000015_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000015_000001.wav",
    }
  },
  {
    "Name": "2035_147961_000017_000001",
    "TestID": "SIM---2035_147961_000017_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000017_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000017_000001.wav",
    }
  },
  {
    "Name": "2035_147961_000017_000005",
    "TestID": "SIM---2035_147961_000017_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2035/147961/2035_147961_000017_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2035/147961/2035_147961_000017_000005.wav",
    }
  },
  {
    "Name": "2078_142845_000004_000000",
    "TestID": "SIM---2078_142845_000004_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2078/142845/2078_142845_000004_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2078/142845/2078_142845_000004_000000.wav",
    }
  },
  {
    "Name": "2078_142845_000044_000001",
    "TestID": "SIM---2078_142845_000044_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2078/142845/2078_142845_000044_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2078/142845/2078_142845_000044_000001.wav",
    }
  },
  {
    "Name": "2086_149214_000006_000004",
    "TestID": "SIM---2086_149214_000006_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149214/2086_149214_000006_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149214/2086_149214_000006_000004.wav",
    }
  },
  {
    "Name": "2086_149220_000007_000003",
    "TestID": "SIM---2086_149220_000007_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000007_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000007_000003.wav",
    }
  },
  {
    "Name": "2086_149220_000016_000003",
    "TestID": "SIM---2086_149220_000016_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000016_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000016_000003.wav",
    }
  },
  {
    "Name": "2086_149220_000027_000001",
    "TestID": "SIM---2086_149220_000027_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000027_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000027_000001.wav",
    }
  },
  {
    "Name": "2086_149220_000028_000000",
    "TestID": "SIM---2086_149220_000028_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000028_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000028_000000.wav",
    }
  },
  {
    "Name": "2086_149220_000029_000001",
    "TestID": "SIM---2086_149220_000029_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000029_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000029_000001.wav",
    }
  },
  {
    "Name": "2086_149220_000034_000000",
    "TestID": "SIM---2086_149220_000034_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000034_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000034_000000.wav",
    }
  },
  {
    "Name": "2086_149220_000047_000000",
    "TestID": "SIM---2086_149220_000047_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2086/149220/2086_149220_000047_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2086/149220/2086_149220_000047_000000.wav",
    }
  },
  {
    "Name": "2277_149874_000025_000003",
    "TestID": "SIM---2277_149874_000025_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149874/2277_149874_000025_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149874/2277_149874_000025_000003.wav",
    }
  },
  {
    "Name": "2277_149896_000017_000000",
    "TestID": "SIM---2277_149896_000017_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149896/2277_149896_000017_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149896/2277_149896_000017_000000.wav",
    }
  },
  {
    "Name": "2277_149897_000006_000004",
    "TestID": "SIM---2277_149897_000006_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000006_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000006_000004.wav",
    }
  },
  {
    "Name": "2277_149897_000009_000000",
    "TestID": "SIM---2277_149897_000009_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000009_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000009_000000.wav",
    }
  },
  {
    "Name": "2277_149897_000016_000001",
    "TestID": "SIM---2277_149897_000016_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000016_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000016_000001.wav",
    }
  },
  {
    "Name": "2277_149897_000020_000004",
    "TestID": "SIM---2277_149897_000020_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000020_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000020_000004.wav",
    }
  },
  {
    "Name": "2277_149897_000038_000000",
    "TestID": "SIM---2277_149897_000038_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000038_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000038_000000.wav",
    }
  },
  {
    "Name": "2277_149897_000040_000001",
    "TestID": "SIM---2277_149897_000040_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000040_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000040_000001.wav",
    }
  },
  {
    "Name": "2277_149897_000045_000000",
    "TestID": "SIM---2277_149897_000045_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2277/149897/2277_149897_000045_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2277/149897/2277_149897_000045_000000.wav",
    }
  },
  {
    "Name": "2412_153954_000007_000005",
    "TestID": "SIM---2412_153954_000007_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2412/153954/2412_153954_000007_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2412/153954/2412_153954_000007_000005.wav",
    }
  },
  {
    "Name": "2412_153954_000007_000006",
    "TestID": "SIM---2412_153954_000007_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2412/153954/2412_153954_000007_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2412/153954/2412_153954_000007_000006.wav",
    }
  },
  {
    "Name": "2412_153954_000008_000002",
    "TestID": "SIM---2412_153954_000008_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2412/153954/2412_153954_000008_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2412/153954/2412_153954_000008_000002.wav",
    }
  },
  {
    "Name": "2412_153954_000008_000003",
    "TestID": "SIM---2412_153954_000008_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2412/153954/2412_153954_000008_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2412/153954/2412_153954_000008_000003.wav",
    }
  },
  {
    "Name": "2428_83699_000008_000007",
    "TestID": "SIM---2428_83699_000008_000007",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83699/2428_83699_000008_000007.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83699/2428_83699_000008_000007.wav",
    }
  },
  {
    "Name": "2428_83699_000013_000004",
    "TestID": "SIM---2428_83699_000013_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83699/2428_83699_000013_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83699/2428_83699_000013_000004.wav",
    }
  },
  {
    "Name": "2428_83699_000039_000008",
    "TestID": "SIM---2428_83699_000039_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83699/2428_83699_000039_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83699/2428_83699_000039_000008.wav",
    }
  },
  {
    "Name": "2428_83705_000022_000000",
    "TestID": "SIM---2428_83705_000022_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83705/2428_83705_000022_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83705/2428_83705_000022_000000.wav",
    }
  },
  {
    "Name": "2428_83705_000025_000002",
    "TestID": "SIM---2428_83705_000025_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83705/2428_83705_000025_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83705/2428_83705_000025_000002.wav",
    }
  },
  {
    "Name": "2428_83705_000033_000005",
    "TestID": "SIM---2428_83705_000033_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2428/83705/2428_83705_000033_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2428/83705/2428_83705_000033_000005.wav",
    }
  },
  {
    "Name": "251_118436_000012_000002",
    "TestID": "SIM---251_118436_000012_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/118436/251_118436_000012_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/118436/251_118436_000012_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/118436/251_118436_000012_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/118436/251_118436_000012_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/118436/251_118436_000012_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/118436/251_118436_000012_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/118436/251_118436_000012_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/118436/251_118436_000012_000002.wav",
    }
  },
  {
    "Name": "251_118436_000019_000000",
    "TestID": "SIM---251_118436_000019_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/118436/251_118436_000019_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/118436/251_118436_000019_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/118436/251_118436_000019_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/118436/251_118436_000019_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/118436/251_118436_000019_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/118436/251_118436_000019_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/118436/251_118436_000019_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/118436/251_118436_000019_000000.wav",
    }
  },
  {
    "Name": "251_118436_000025_000000",
    "TestID": "SIM---251_118436_000025_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/118436/251_118436_000025_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/118436/251_118436_000025_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/118436/251_118436_000025_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/118436/251_118436_000025_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/118436/251_118436_000025_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/118436/251_118436_000025_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/118436/251_118436_000025_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/118436/251_118436_000025_000000.wav",
    }
  },
  {
    "Name": "251_118436_000026_000000",
    "TestID": "SIM---251_118436_000026_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/118436/251_118436_000026_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/118436/251_118436_000026_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/118436/251_118436_000026_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/118436/251_118436_000026_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/118436/251_118436_000026_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/118436/251_118436_000026_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/118436/251_118436_000026_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/118436/251_118436_000026_000000.wav",
    }
  },
  {
    "Name": "251_136532_000011_000000",
    "TestID": "SIM---251_136532_000011_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/136532/251_136532_000011_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/136532/251_136532_000011_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/136532/251_136532_000011_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/136532/251_136532_000011_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/136532/251_136532_000011_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/136532/251_136532_000011_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/136532/251_136532_000011_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/136532/251_136532_000011_000000.wav",
    }
  },
  {
    "Name": "251_136532_000019_000002",
    "TestID": "SIM---251_136532_000019_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/136532/251_136532_000019_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/136532/251_136532_000019_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/136532/251_136532_000019_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/136532/251_136532_000019_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/136532/251_136532_000019_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/136532/251_136532_000019_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/136532/251_136532_000019_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/136532/251_136532_000019_000002.wav",
    }
  },
  {
    "Name": "251_136532_000020_000000",
    "TestID": "SIM---251_136532_000020_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/136532/251_136532_000020_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/136532/251_136532_000020_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/136532/251_136532_000020_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/136532/251_136532_000020_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/136532/251_136532_000020_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/136532/251_136532_000020_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/136532/251_136532_000020_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/136532/251_136532_000020_000000.wav",
    }
  },
  {
    "Name": "251_136532_000020_000001",
    "TestID": "SIM---251_136532_000020_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/136532/251_136532_000020_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/136532/251_136532_000020_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/136532/251_136532_000020_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/136532/251_136532_000020_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/136532/251_136532_000020_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/136532/251_136532_000020_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/136532/251_136532_000020_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/136532/251_136532_000020_000001.wav",
    }
  },
  {
    "Name": "251_137823_000013_000000",
    "TestID": "SIM---251_137823_000013_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000013_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000013_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000013_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000013_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000013_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000013_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000013_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000013_000000.wav",
    }
  },
  {
    "Name": "251_137823_000022_000001",
    "TestID": "SIM---251_137823_000022_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000022_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000022_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000022_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000022_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000022_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000022_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000022_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000022_000001.wav",
    }
  },
  {
    "Name": "251_137823_000024_000003",
    "TestID": "SIM---251_137823_000024_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000024_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000024_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000024_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000024_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000024_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000024_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000024_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000024_000003.wav",
    }
  },
  {
    "Name": "251_137823_000033_000002",
    "TestID": "SIM---251_137823_000033_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000033_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000033_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000033_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000033_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000033_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000033_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000033_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000033_000002.wav",
    }
  },
  {
    "Name": "251_137823_000042_000001",
    "TestID": "SIM---251_137823_000042_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000042_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000042_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000042_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000042_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000042_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000042_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000042_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000042_000001.wav",
    }
  },
  {
    "Name": "251_137823_000044_000001",
    "TestID": "SIM---251_137823_000044_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000044_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000044_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000044_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000044_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000044_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000044_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000044_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000044_000001.wav",
    }
  },
  {
    "Name": "251_137823_000052_000000",
    "TestID": "SIM---251_137823_000052_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/251/137823/251_137823_000052_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/251/137823/251_137823_000052_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/251/137823/251_137823_000052_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/251/137823/251_137823_000052_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/251/137823/251_137823_000052_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/251/137823/251_137823_000052_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/251/137823/251_137823_000052_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/251/137823/251_137823_000052_000000.wav",
    }
  },
  {
    "Name": "2803_154320_000004_000004",
    "TestID": "SIM---2803_154320_000004_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154320/2803_154320_000004_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154320/2803_154320_000004_000004.wav",
    }
  },
  {
    "Name": "2803_154328_000007_000000",
    "TestID": "SIM---2803_154328_000007_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154328/2803_154328_000007_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154328/2803_154328_000007_000000.wav",
    }
  },
  {
    "Name": "2803_154328_000039_000000",
    "TestID": "SIM---2803_154328_000039_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154328/2803_154328_000039_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154328/2803_154328_000039_000000.wav",
    }
  },
  {
    "Name": "2803_154328_000047_000000",
    "TestID": "SIM---2803_154328_000047_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154328/2803_154328_000047_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154328/2803_154328_000047_000000.wav",
    }
  },
  {
    "Name": "2803_154328_000065_000000",
    "TestID": "SIM---2803_154328_000065_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154328/2803_154328_000065_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154328/2803_154328_000065_000000.wav",
    }
  },
  {
    "Name": "2803_154328_000069_000000",
    "TestID": "SIM---2803_154328_000069_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/154328/2803_154328_000069_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/154328/2803_154328_000069_000000.wav",
    }
  },
  {
    "Name": "2803_161169_000005_000008",
    "TestID": "SIM---2803_161169_000005_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2803/161169/2803_161169_000005_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2803/161169/2803_161169_000005_000008.wav",
    }
  },
  {
    "Name": "2902_9008_000002_000000",
    "TestID": "SIM---2902_9008_000002_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/2902/9008/2902_9008_000002_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/2902/9008/2902_9008_000002_000000.wav",
    }
  },
  {
    "Name": "3000_15664_000002_000000",
    "TestID": "SIM---3000_15664_000002_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3000/15664/3000_15664_000002_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3000/15664/3000_15664_000002_000000.wav",
    }
  },
  {
    "Name": "3000_15664_000004_000001",
    "TestID": "SIM---3000_15664_000004_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3000/15664/3000_15664_000004_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3000/15664/3000_15664_000004_000001.wav",
    }
  },
  {
    "Name": "3000_15664_000014_000000",
    "TestID": "SIM---3000_15664_000014_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3000/15664/3000_15664_000014_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3000/15664/3000_15664_000014_000000.wav",
    }
  },
  {
    "Name": "3000_15664_000039_000003",
    "TestID": "SIM---3000_15664_000039_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3000/15664/3000_15664_000039_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3000/15664/3000_15664_000039_000003.wav",
    }
  },
  {
    "Name": "3170_137482_000008_000000",
    "TestID": "SIM---3170_137482_000008_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3170/137482/3170_137482_000008_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3170/137482/3170_137482_000008_000000.wav",
    }
  },
  {
    "Name": "3170_137482_000016_000001",
    "TestID": "SIM---3170_137482_000016_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3170/137482/3170_137482_000016_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3170/137482/3170_137482_000016_000001.wav",
    }
  },
  {
    "Name": "3170_137482_000022_000000",
    "TestID": "SIM---3170_137482_000022_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3170/137482/3170_137482_000022_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3170/137482/3170_137482_000022_000000.wav",
    }
  },
  {
    "Name": "3170_137482_000032_000000",
    "TestID": "SIM---3170_137482_000032_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3170/137482/3170_137482_000032_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3170/137482/3170_137482_000032_000000.wav",
    }
  },
  {
    "Name": "3170_137482_000058_000008",
    "TestID": "SIM---3170_137482_000058_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3170/137482/3170_137482_000058_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3170/137482/3170_137482_000058_000008.wav",
    }
  },
  {
    "Name": "3536_23268_000008_000000",
    "TestID": "SIM---3536_23268_000008_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3536/23268/3536_23268_000008_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3536/23268/3536_23268_000008_000000.wav",
    }
  },
  {
    "Name": "3536_8226_000020_000006",
    "TestID": "SIM---3536_8226_000020_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3536/8226/3536_8226_000020_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3536/8226/3536_8226_000020_000006.wav",
    }
  },
  {
    "Name": "3536_8226_000027_000002",
    "TestID": "SIM---3536_8226_000027_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3536/8226/3536_8226_000027_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3536/8226/3536_8226_000027_000002.wav",
    }
  },
  {
    "Name": "3752_4943_000054_000004",
    "TestID": "SIM---3752_4943_000054_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4943/3752_4943_000054_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4943/3752_4943_000054_000004.wav",
    }
  },
  {
    "Name": "3752_4943_000059_000003",
    "TestID": "SIM---3752_4943_000059_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4943/3752_4943_000059_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4943/3752_4943_000059_000003.wav",
    }
  },
  {
    "Name": "3752_4944_000029_000000",
    "TestID": "SIM---3752_4944_000029_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4944/3752_4944_000029_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4944/3752_4944_000029_000000.wav",
    }
  },
  {
    "Name": "3752_4944_000033_000000",
    "TestID": "SIM---3752_4944_000033_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4944/3752_4944_000033_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4944/3752_4944_000033_000000.wav",
    }
  },
  {
    "Name": "3752_4944_000055_000001",
    "TestID": "SIM---3752_4944_000055_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4944/3752_4944_000055_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4944/3752_4944_000055_000001.wav",
    }
  },
  {
    "Name": "3752_4944_000059_000000",
    "TestID": "SIM---3752_4944_000059_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4944/3752_4944_000059_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4944/3752_4944_000059_000000.wav",
    }
  },
  {
    "Name": "3752_4944_000100_000007",
    "TestID": "SIM---3752_4944_000100_000007",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3752/4944/3752_4944_000100_000007.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3752/4944/3752_4944_000100_000007.wav",
    }
  },
  {
    "Name": "3853_163249_000035_000000",
    "TestID": "SIM---3853_163249_000035_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3853/163249/3853_163249_000035_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3853/163249/3853_163249_000035_000000.wav",
    }
  },
  {
    "Name": "3853_163249_000075_000001",
    "TestID": "SIM---3853_163249_000075_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3853/163249/3853_163249_000075_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3853/163249/3853_163249_000075_000001.wav",
    }
  },
  {
    "Name": "3853_163249_000117_000000",
    "TestID": "SIM---3853_163249_000117_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3853/163249/3853_163249_000117_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3853/163249/3853_163249_000117_000000.wav",
    }
  },
  {
    "Name": "3853_163249_000146_000001",
    "TestID": "SIM---3853_163249_000146_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/3853/163249/3853_163249_000146_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/3853/163249/3853_163249_000146_000001.wav",
    }
  },
  {
    "Name": "5338_284437_000041_000001",
    "TestID": "SIM---5338_284437_000041_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5338/284437/5338_284437_000041_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5338/284437/5338_284437_000041_000001.wav",
    }
  },
  {
    "Name": "5536_43359_000001_000001",
    "TestID": "SIM---5536_43359_000001_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5536/43359/5536_43359_000001_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5536/43359/5536_43359_000001_000001.wav",
    }
  },
  {
    "Name": "5536_43359_000017_000004",
    "TestID": "SIM---5536_43359_000017_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5536/43359/5536_43359_000017_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5536/43359/5536_43359_000017_000004.wav",
    }
  },
  {
    "Name": "5536_43359_000020_000000",
    "TestID": "SIM---5536_43359_000020_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5536/43359/5536_43359_000020_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5536/43359/5536_43359_000020_000000.wav",
    }
  },
  {
    "Name": "5536_43363_000017_000000",
    "TestID": "SIM---5536_43363_000017_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5536/43363/5536_43363_000017_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5536/43363/5536_43363_000017_000000.wav",
    }
  },
  {
    "Name": "5694_64025_000018_000000",
    "TestID": "SIM---5694_64025_000018_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64025/5694_64025_000018_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64025/5694_64025_000018_000000.wav",
    }
  },
  {
    "Name": "5694_64025_000019_000002",
    "TestID": "SIM---5694_64025_000019_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64025/5694_64025_000019_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64025/5694_64025_000019_000002.wav",
    }
  },
  {
    "Name": "5694_64029_000008_000001",
    "TestID": "SIM---5694_64029_000008_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64029/5694_64029_000008_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64029/5694_64029_000008_000001.wav",
    }
  },
  {
    "Name": "5694_64029_000012_000001",
    "TestID": "SIM---5694_64029_000012_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64029/5694_64029_000012_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64029/5694_64029_000012_000001.wav",
    }
  },
  {
    "Name": "5694_64029_000019_000000",
    "TestID": "SIM---5694_64029_000019_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64029/5694_64029_000019_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64029/5694_64029_000019_000000.wav",
    }
  },
  {
    "Name": "5694_64038_000015_000003",
    "TestID": "SIM---5694_64038_000015_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5694/64038/5694_64038_000015_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5694/64038/5694_64038_000015_000003.wav",
    }
  },
  {
    "Name": "5895_34615_000019_000006",
    "TestID": "SIM---5895_34615_000019_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34615/5895_34615_000019_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34615/5895_34615_000019_000006.wav",
    }
  },
  {
    "Name": "5895_34615_000023_000000",
    "TestID": "SIM---5895_34615_000023_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34615/5895_34615_000023_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34615/5895_34615_000023_000000.wav",
    }
  },
  {
    "Name": "5895_34622_000005_000003",
    "TestID": "SIM---5895_34622_000005_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34622/5895_34622_000005_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34622/5895_34622_000005_000003.wav",
    }
  },
  {
    "Name": "5895_34622_000038_000000",
    "TestID": "SIM---5895_34622_000038_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34622/5895_34622_000038_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34622/5895_34622_000038_000000.wav",
    }
  },
  {
    "Name": "5895_34629_000006_000001",
    "TestID": "SIM---5895_34629_000006_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34629/5895_34629_000006_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34629/5895_34629_000006_000001.wav",
    }
  },
  {
    "Name": "5895_34629_000036_000000",
    "TestID": "SIM---5895_34629_000036_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/5895/34629/5895_34629_000036_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/5895/34629/5895_34629_000036_000000.wav",
    }
  },
  {
    "Name": "6241_61943_000009_000000",
    "TestID": "SIM---6241_61943_000009_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6241/61943/6241_61943_000009_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6241/61943/6241_61943_000009_000000.wav",
    }
  },
  {
    "Name": "6241_61943_000023_000000",
    "TestID": "SIM---6241_61943_000023_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6241/61943/6241_61943_000023_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6241/61943/6241_61943_000023_000000.wav",
    }
  },
  {
    "Name": "6241_61946_000033_000001",
    "TestID": "SIM---6241_61946_000033_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6241/61946/6241_61946_000033_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6241/61946/6241_61946_000033_000001.wav",
    }
  },
  {
    "Name": "6241_66616_000012_000001",
    "TestID": "SIM---6241_66616_000012_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6241/66616/6241_66616_000012_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6241/66616/6241_66616_000012_000001.wav",
    }
  },
  {
    "Name": "6295_244435_000015_000001",
    "TestID": "SIM---6295_244435_000015_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6295/244435/6295_244435_000015_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6295/244435/6295_244435_000015_000001.wav",
    }
  },
  {
    "Name": "6295_64301_000002_000001",
    "TestID": "SIM---6295_64301_000002_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6295/64301/6295_64301_000002_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6295/64301/6295_64301_000002_000001.wav",
    }
  },
  {
    "Name": "6313_66125_000016_000000",
    "TestID": "SIM---6313_66125_000016_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66125/6313_66125_000016_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66125/6313_66125_000016_000000.wav",
    }
  },
  {
    "Name": "6313_66125_000064_000001",
    "TestID": "SIM---6313_66125_000064_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66125/6313_66125_000064_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66125/6313_66125_000064_000001.wav",
    }
  },
  {
    "Name": "6313_66129_000016_000001",
    "TestID": "SIM---6313_66129_000016_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66129/6313_66129_000016_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66129/6313_66129_000016_000001.wav",
    }
  },
  {
    "Name": "6313_66129_000036_000001",
    "TestID": "SIM---6313_66129_000036_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66129/6313_66129_000036_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66129/6313_66129_000036_000001.wav",
    }
  },
  {
    "Name": "6313_66129_000038_000000",
    "TestID": "SIM---6313_66129_000038_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66129/6313_66129_000038_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66129/6313_66129_000038_000000.wav",
    }
  },
  {
    "Name": "6313_66129_000064_000002",
    "TestID": "SIM---6313_66129_000064_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66129/6313_66129_000064_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66129/6313_66129_000064_000002.wav",
    }
  },
  {
    "Name": "6313_66129_000088_000000",
    "TestID": "SIM---6313_66129_000088_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/66129/6313_66129_000088_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/66129/6313_66129_000088_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000024_000000",
    "TestID": "SIM---6313_76958_000024_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000024_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000024_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000025_000000",
    "TestID": "SIM---6313_76958_000025_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000025_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000025_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000038_000001",
    "TestID": "SIM---6313_76958_000038_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000038_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000038_000001.wav",
    }
  },
  {
    "Name": "6313_76958_000048_000000",
    "TestID": "SIM---6313_76958_000048_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000048_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000048_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000083_000000",
    "TestID": "SIM---6313_76958_000083_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000083_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000083_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000089_000000",
    "TestID": "SIM---6313_76958_000089_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000089_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000089_000000.wav",
    }
  },
  {
    "Name": "6313_76958_000094_000000",
    "TestID": "SIM---6313_76958_000094_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6313/76958/6313_76958_000094_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6313/76958/6313_76958_000094_000000.wav",
    }
  },
  {
    "Name": "6319_275224_000015_000000",
    "TestID": "SIM---6319_275224_000015_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/275224/6319_275224_000015_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/275224/6319_275224_000015_000000.wav",
    }
  },
  {
    "Name": "6319_275224_000018_000000",
    "TestID": "SIM---6319_275224_000018_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/275224/6319_275224_000018_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/275224/6319_275224_000018_000000.wav",
    }
  },
  {
    "Name": "6319_275224_000021_000002",
    "TestID": "SIM---6319_275224_000021_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/275224/6319_275224_000021_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/275224/6319_275224_000021_000002.wav",
    }
  },
  {
    "Name": "6319_275224_000022_000001",
    "TestID": "SIM---6319_275224_000022_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/275224/6319_275224_000022_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/275224/6319_275224_000022_000001.wav",
    }
  },
  {
    "Name": "6319_275224_000022_000007",
    "TestID": "SIM---6319_275224_000022_000007",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/275224/6319_275224_000022_000007.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/275224/6319_275224_000022_000007.wav",
    }
  },
  {
    "Name": "6319_57405_000007_000001",
    "TestID": "SIM---6319_57405_000007_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/57405/6319_57405_000007_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/57405/6319_57405_000007_000001.wav",
    }
  },
  {
    "Name": "6319_64726_000015_000001",
    "TestID": "SIM---6319_64726_000015_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6319/64726/6319_64726_000015_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6319/64726/6319_64726_000015_000001.wav",
    }
  },
  {
    "Name": "6345_64257_000008_000008",
    "TestID": "SIM---6345_64257_000008_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/64257/6345_64257_000008_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/64257/6345_64257_000008_000008.wav",
    }
  },
  {
    "Name": "6345_64257_000009_000011",
    "TestID": "SIM---6345_64257_000009_000011",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/64257/6345_64257_000009_000011.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/64257/6345_64257_000009_000011.wav",
    }
  },
  {
    "Name": "6345_93302_000036_000002",
    "TestID": "SIM---6345_93302_000036_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/93302/6345_93302_000036_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/93302/6345_93302_000036_000002.wav",
    }
  },
  {
    "Name": "6345_93302_000037_000007",
    "TestID": "SIM---6345_93302_000037_000007",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/93302/6345_93302_000037_000007.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/93302/6345_93302_000037_000007.wav",
    }
  },
  {
    "Name": "6345_93302_000062_000003",
    "TestID": "SIM---6345_93302_000062_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/93302/6345_93302_000062_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/93302/6345_93302_000062_000003.wav",
    }
  },
  {
    "Name": "6345_93306_000023_000003",
    "TestID": "SIM---6345_93306_000023_000003",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/93306/6345_93306_000023_000003.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/93306/6345_93306_000023_000003.wav",
    }
  },
  {
    "Name": "6345_93306_000043_000001",
    "TestID": "SIM---6345_93306_000043_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/6345/93306/6345_93306_000043_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/6345/93306/6345_93306_000043_000001.wav",
    }
  },
  {
    "Name": "652_130737_000021_000000",
    "TestID": "SIM---652_130737_000021_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/652/130737/652_130737_000021_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/652/130737/652_130737_000021_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/652/130737/652_130737_000021_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/652/130737/652_130737_000021_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/652/130737/652_130737_000021_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/652/130737/652_130737_000021_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/652/130737/652_130737_000021_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/652/130737/652_130737_000021_000000.wav",
    }
  },
  {
    "Name": "777_126732_000076_000005",
    "TestID": "SIM---777_126732_000076_000005",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/777/126732/777_126732_000076_000005.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/777/126732/777_126732_000076_000005.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/777/126732/777_126732_000076_000005.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/777/126732/777_126732_000076_000005.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/777/126732/777_126732_000076_000005.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/777/126732/777_126732_000076_000005.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/777/126732/777_126732_000076_000005.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/777/126732/777_126732_000076_000005.wav",
    }
  },
  {
    "Name": "7850_286674_000002_000004",
    "TestID": "SIM---7850_286674_000002_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7850/286674/7850_286674_000002_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7850/286674/7850_286674_000002_000004.wav",
    }
  },
  {
    "Name": "7850_286674_000005_000000",
    "TestID": "SIM---7850_286674_000005_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7850/286674/7850_286674_000005_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7850/286674/7850_286674_000005_000000.wav",
    }
  },
  {
    "Name": "7850_73752_000003_000015",
    "TestID": "SIM---7850_73752_000003_000015",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7850/73752/7850_73752_000003_000015.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7850/73752/7850_73752_000003_000015.wav",
    }
  },
  {
    "Name": "7850_73752_000009_000004",
    "TestID": "SIM---7850_73752_000009_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7850/73752/7850_73752_000009_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7850/73752/7850_73752_000009_000004.wav",
    }
  },
  {
    "Name": "7976_105575_000011_000010",
    "TestID": "SIM---7976_105575_000011_000010",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/105575/7976_105575_000011_000010.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/105575/7976_105575_000011_000010.wav",
    }
  },
  {
    "Name": "7976_105575_000014_000000",
    "TestID": "SIM---7976_105575_000014_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/105575/7976_105575_000014_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/105575/7976_105575_000014_000000.wav",
    }
  },
  {
    "Name": "7976_105575_000014_000004",
    "TestID": "SIM---7976_105575_000014_000004",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/105575/7976_105575_000014_000004.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/105575/7976_105575_000014_000004.wav",
    }
  },
  {
    "Name": "7976_105575_000020_000002",
    "TestID": "SIM---7976_105575_000020_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/105575/7976_105575_000020_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/105575/7976_105575_000020_000002.wav",
    }
  },
  {
    "Name": "7976_110124_000026_000000",
    "TestID": "SIM---7976_110124_000026_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110124/7976_110124_000026_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110124/7976_110124_000026_000000.wav",
    }
  },
  {
    "Name": "7976_110124_000031_000001",
    "TestID": "SIM---7976_110124_000031_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110124/7976_110124_000031_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110124/7976_110124_000031_000001.wav",
    }
  },
  {
    "Name": "7976_110124_000063_000000",
    "TestID": "SIM---7976_110124_000063_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110124/7976_110124_000063_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110124/7976_110124_000063_000000.wav",
    }
  },
  {
    "Name": "7976_110523_000006_000000",
    "TestID": "SIM---7976_110523_000006_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110523/7976_110523_000006_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110523/7976_110523_000006_000000.wav",
    }
  },
  {
    "Name": "7976_110523_000010_000001",
    "TestID": "SIM---7976_110523_000010_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110523/7976_110523_000010_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110523/7976_110523_000010_000001.wav",
    }
  },
  {
    "Name": "7976_110523_000027_000002",
    "TestID": "SIM---7976_110523_000027_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/7976/110523/7976_110523_000027_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/7976/110523/7976_110523_000027_000002.wav",
    }
  },
  {
    "Name": "8297_275154_000000_000001",
    "TestID": "SIM---8297_275154_000000_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275154/8297_275154_000000_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275154/8297_275154_000000_000001.wav",
    }
  },
  {
    "Name": "8297_275154_000008_000002",
    "TestID": "SIM---8297_275154_000008_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275154/8297_275154_000008_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275154/8297_275154_000008_000002.wav",
    }
  },
  {
    "Name": "8297_275155_000028_000006",
    "TestID": "SIM---8297_275155_000028_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275155/8297_275155_000028_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275155/8297_275155_000028_000006.wav",
    }
  },
  {
    "Name": "8297_275155_000029_000000",
    "TestID": "SIM---8297_275155_000029_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275155/8297_275155_000029_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275155/8297_275155_000029_000000.wav",
    }
  },
  {
    "Name": "8297_275155_000038_000001",
    "TestID": "SIM---8297_275155_000038_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275155/8297_275155_000038_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275155/8297_275155_000038_000001.wav",
    }
  },
  {
    "Name": "8297_275156_000013_000006",
    "TestID": "SIM---8297_275156_000013_000006",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275156/8297_275156_000013_000006.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275156/8297_275156_000013_000006.wav",
    }
  },
  {
    "Name": "8297_275156_000015_000001",
    "TestID": "SIM---8297_275156_000015_000001",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275156/8297_275156_000015_000001.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275156/8297_275156_000015_000001.wav",
    }
  },
  {
    "Name": "8297_275156_000017_000002",
    "TestID": "SIM---8297_275156_000017_000002",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/8297/275156/8297_275156_000017_000002.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/8297/275156/8297_275156_000017_000002.wav",
    }
  },
  {
    "Name": "84_121123_000009_000008",
    "TestID": "SIM---84_121123_000009_000008",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121123/84_121123_000009_000008.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121123/84_121123_000009_000008.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121123/84_121123_000009_000008.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121123/84_121123_000009_000008.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121123/84_121123_000009_000008.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121123/84_121123_000009_000008.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121123/84_121123_000009_000008.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121123/84_121123_000009_000008.wav",
    }
  },
  {
    "Name": "84_121123_000011_000007",
    "TestID": "SIM---84_121123_000011_000007",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121123/84_121123_000011_000007.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121123/84_121123_000011_000007.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121123/84_121123_000011_000007.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121123/84_121123_000011_000007.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121123/84_121123_000011_000007.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121123/84_121123_000011_000007.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121123/84_121123_000011_000007.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121123/84_121123_000011_000007.wav",
    }
  },
  {
    "Name": "84_121123_000028_000000",
    "TestID": "SIM---84_121123_000028_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121123/84_121123_000028_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121123/84_121123_000028_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121123/84_121123_000028_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121123/84_121123_000028_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121123/84_121123_000028_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121123/84_121123_000028_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121123/84_121123_000028_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121123/84_121123_000028_000000.wav",
    }
  },
  {
    "Name": "84_121550_000010_000000",
    "TestID": "SIM---84_121550_000010_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121550/84_121550_000010_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121550/84_121550_000010_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121550/84_121550_000010_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121550/84_121550_000010_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121550/84_121550_000010_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121550/84_121550_000010_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121550/84_121550_000010_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121550/84_121550_000010_000000.wav",
    }
  },
  {
    "Name": "84_121550_000097_000000",
    "TestID": "SIM---84_121550_000097_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121550/84_121550_000097_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121550/84_121550_000097_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121550/84_121550_000097_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121550/84_121550_000097_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121550/84_121550_000097_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121550/84_121550_000097_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121550/84_121550_000097_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121550/84_121550_000097_000000.wav",
    }
  },
  {
    "Name": "84_121550_000193_000000",
    "TestID": "SIM---84_121550_000193_000000",
    "Files": {
      "Reference": "./audio/ground-truth/dev-clean/84/121550/84_121550_000193_000000.wav",
      "External---gtHED": "./audio/External/gtHED/dev-clean/84/121550/84_121550_000193_000000.wav",
      "VA---gtHED": "./audio/Variance-Adaptor/gtHED/dev-clean/84/121550/84_121550_000193_000000.wav",
      "VA-seq---gtHED": "./audio/Variance-Adaptor_seq/gtHED/dev-clean/84/121550/84_121550_000193_000000.wav",
      "External---predHED_spkemb_noseq": "./audio/External/predHED---External---spkemb_noseq/dev-clean/84/121550/84_121550_000193_000000.wav",
      "External---predHED_spkemb": "./audio/External/predHED---External---spkemb/dev-clean/84/121550/84_121550_000193_000000.wav",
      "VA---predHED": "./audio/Variance-Adaptor/predHED---Variance-Adaptor/dev-clean/84/121550/84_121550_000193_000000.wav",
      "VA-seq---predHED": "./audio/Variance-Adaptor_seq/predHED---Variance-Adaptor_seq/dev-clean/84/121550/84_121550_000193_000000.wav",
    }
  },
]
}