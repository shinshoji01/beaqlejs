var TestConfig = {
  "TestName": "Speech Naturalness Evaluation",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":50,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "shoinoue@link.cuhk.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 15,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets":
[
  {
    "Name": "1272_128104_000003_000005",
    "TestID": "NAT---1272_128104_000003_000005",
    "Text": "<br>After listening so long to the Don Quixote of art, to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;listen once to Sancho Panza is both salutary and refreshing. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1272/128104/1272_128104_000003_000005.wav",
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
    "TestID": "NAT---1272_128104_000005_000000",
    "Text": "<br>About artists and their work mr Quilter has, of course, a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;great deal to say. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1272/128104/1272_128104_000005_000000.wav",
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
    "TestID": "NAT---1272_135031_000052_000001",
    "Text": "<br>They fell into the big pit in the passage, and we <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;put the cover on to keep them there; but when <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the executioners went to look for them they had all <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disappeared from the pit and we could find no trace <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of them.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1272/135031/1272_135031_000052_000001.wav",
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
    "TestID": "NAT---1272_135031_000058_000000",
    "Text": "<br>Betsy laughed and Shaggy seemed rather hurt; but Polychrome relieved his <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;embarrassment by saying softly: `One can be ugly in looks, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but lovely in disposition.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1272/135031/1272_135031_000058_000000.wav",
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
    "TestID": "NAT---1272_141231_000031_000000",
    "Text": "<br>When the buzzer sounded he pulled his foil from his second's <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startled grasp, and ran forward. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1272/141231/1272_141231_000031_000000.wav",
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
    "TestID": "NAT---1462_170138_000007_000004",
    "Text": "<br>She saves her hand, too. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170138/1462_170138_000007_000004.wav",
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
    "TestID": "NAT---1462_170138_000022_000012",
    "Text": "<br>He had been in London more or less, but he had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;never happened to hear of her. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170138/1462_170138_000022_000012.wav",
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
    "TestID": "NAT---1462_170142_000024_000002",
    "Text": "<br>I have thought about it until I am worn out.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170142/1462_170142_000024_000002.wav",
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
    "TestID": "NAT---1462_170142_000043_000006",
    "Text": "<br>I'm growing older, and you've got my young self here with <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170142/1462_170142_000043_000006.wav",
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
    "TestID": "NAT---1462_170145_000006_000001",
    "Text": "<br>The yellow light from the student's lamp fell on his hands <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and the purple sleeves of his velvet smoking jacket, but <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his flushed face and big, hard head were in the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shadow. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000006_000001.wav",
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
    "TestID": "NAT---1462_170145_000011_000000",
    "Text": "<br>She was afraid to look up at him. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000011_000000.wav",
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
    "TestID": "NAT---1462_170145_000031_000001",
    "Text": "<br>Don't do anything like that rashly.` His face grew troubled. `You <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wouldn't be happy. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000031_000001.wav",
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
    "TestID": "NAT---1462_170145_000031_000002",
    "Text": "<br>You are not that kind of woman. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1462/170145/1462_170145_000031_000002.wav",
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
    "TestID": "NAT---174_168635_000030_000001",
    "Text": "<br>There he seemed perfectly secure. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/168635/174_168635_000030_000001.wav",
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
    "TestID": "NAT---174_168635_000042_000002",
    "Text": "<br>He saw a whole future stretching out before him, illuminated by <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cosette as by a charming light. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/168635/174_168635_000042_000002.wav",
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
    "TestID": "NAT---174_50561_000001_000008",
    "Text": "<br>On this adventure he was about the business of young Robin <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rue. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/50561/174_50561_000001_000008.wav",
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
    "TestID": "NAT---174_84280_000003_000003",
    "Text": "<br>It gives, at most, certain acute points, certain salient aspects. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/84280/174_84280_000003_000003.wav",
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
    "TestID": "NAT---174_84280_000004_000003",
    "Text": "<br>Nevertheless she was not all my life, nor the form of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all my life. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/84280/174_84280_000004_000003.wav",
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
    "TestID": "NAT---174_84280_000016_000000",
    "Text": "<br>I will not be content with that compromise of jealousies which <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is the established life of humanity to day. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/174/84280/174_84280_000016_000000.wav",
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
    "TestID": "NAT---1919_142785_000020_000006",
    "Text": "<br>Great attention must be paid to the directions in the commencement <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of this recipe, as, if these are not properly carried <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;out, the result will be far from satisfactory. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1919/142785/1919_142785_000020_000006.wav",
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
    "TestID": "NAT---1919_142785_000035_000002",
    "Text": "<br>The lemon was first cultivated in England in the beginning of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the seventeenth century, and is now often to be found <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in our green houses. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1919/142785/1919_142785_000035_000002.wav",
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
    "TestID": "NAT---1988_147956_000002_000000",
    "Text": "<br>I could hardly wait to see what lay beyond that cornfield; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but there was only red grass like ours, and nothing <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else, though from the high wagon seat one could look <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;off a long way. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/147956/1988_147956_000002_000000.wav",
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
    "TestID": "NAT---1988_24833_000005_000000",
    "Text": "<br>As for keeping cats in my room, that's pretty well forgotten. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000005_000000.wav",
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
    "TestID": "NAT---1988_24833_000006_000002",
    "Text": "<br>When are you getting rid of these cats? ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000006_000002.wav",
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
    "TestID": "NAT---1988_24833_000009_000002",
    "Text": "<br>The second semester I switch to a music course. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000009_000002.wav",
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
    "TestID": "NAT---1988_24833_000019_000001",
    "Text": "<br>He just likes to boss everything I do.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000019_000001.wav",
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
    "TestID": "NAT---1988_24833_000050_000001",
    "Text": "<br>It's Tom, and Hilda is with him. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000050_000001.wav",
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
    "TestID": "NAT---1988_24833_000058_000000",
    "Text": "<br>Tom says, `Thanks` and looks at Hilda, and she blushes. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000058_000000.wav",
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
    "TestID": "NAT---1988_24833_000062_000000",
    "Text": "<br>`No, not if I enlist in the Army. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1988/24833/1988_24833_000062_000000.wav",
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
    "TestID": "NAT---1993_147149_000022_000002",
    "Text": "<br>Alice and Mary stood by with eyes fixed on the poor <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;child, whose struggles seemed to increase, till at last his <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mother said with a choking voice, ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000022_000002.wav",
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
    "TestID": "NAT---1993_147149_000036_000000",
    "Text": "<br>`They're both gone,` said she. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000036_000000.wav",
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
    "TestID": "NAT---1993_147149_000043_000000",
    "Text": "<br>Jem felt a strange leap of joy in his heart, and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;knew the power she had of comforting him. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1993/147149/1993_147149_000043_000000.wav",
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
    "TestID": "NAT---1993_147964_000005_000009",
    "Text": "<br>Grandmother hunted up her fancy cake cutters and baked gingerbread men <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and roosters, which we decorated with burnt sugar and red <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cinnamon drops. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1993/147964/1993_147964_000005_000009.wav",
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
    "TestID": "NAT---1993_147964_000008_000000",
    "Text": "<br>I can see them now, exactly as they looked, working about <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the table in the lamplight: Jake with his heavy features, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;so rudely moulded that his face seemed, somehow, unfinished; Otto <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with his half ear and the savage scar that made <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his upper lip curl so ferociously under his twisted mustache. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/1993/147964/1993_147964_000008_000000.wav",
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
    "TestID": "NAT---2035_147960_000004_000009",
    "Text": "<br>It was on one of these gravel beds that I met <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;my adventure. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147960/2035_147960_000004_000009.wav",
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
    "TestID": "NAT---2035_147960_000007_000001",
    "Text": "<br>I suppose I looked as sick as I felt. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147960/2035_147960_000007_000001.wav",
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
    "TestID": "NAT---2035_147961_000004_000005",
    "Text": "<br>She asked peter to wait a moment, and when she came <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;back from the kitchen she brought a bag of sandwiches <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and doughnuts for us. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000004_000005.wav",
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
    "TestID": "NAT---2035_147961_000007_000006",
    "Text": "<br>The wind shook the doors and windows impatiently, then swept on <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;again, singing through the big spaces. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000007_000006.wav",
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
    "TestID": "NAT---2035_147961_000009_000004",
    "Text": "<br>The sharp smell of spirits went through the room. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000009_000004.wav",
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
    "TestID": "NAT---2035_147961_000013_000000",
    "Text": "<br>The sick man raged and shook his fist. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000013_000000.wav",
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
    "TestID": "NAT---2035_147961_000013_000008",
    "Text": "<br>Antonia's father uncovered one of his long bony legs and rubbed <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it rhythmically. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000013_000008.wav",
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
    "TestID": "NAT---2035_147961_000015_000001",
    "Text": "<br>What she did not tell me then, she told later; we <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;talked of nothing else for days afterward. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000015_000001.wav",
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
    "TestID": "NAT---2035_147961_000017_000001",
    "Text": "<br>The dinner lasted all afternoon; then it became a supper and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continued far into the night. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000017_000001.wav",
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
    "TestID": "NAT---2035_147961_000017_000005",
    "Text": "<br>He sprang in beside her, and Pavel and peter (our Pavel <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and peter!) took the front seat. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2035/147961/2035_147961_000017_000005.wav",
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
    "TestID": "NAT---2078_142845_000004_000000",
    "Text": "<br>TO MAKE YEAST FOR BREAD. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2078/142845/2078_142845_000004_000000.wav",
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
    "TestID": "NAT---2078_142845_000044_000001",
    "Text": "<br>Put the flour into a pan, stir in the above ingredients, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and let the dough rise, covered in a warm place. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Knead it well, make it into rolls, let them rise <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;again for a few minutes, and bake in a quick <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oven. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2078/142845/2078_142845_000044_000001.wav",
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
    "TestID": "NAT---2086_149214_000006_000004",
    "Text": "<br>The author has considered it hardly worth his while, therefore, relentlessly <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to impale the story with its moral as with an <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iron rod,--or, rather, as by sticking a pin through a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;butterfly,--thus at once depriving it of life, and causing it <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to stiffen in an ungainly and unnatural attitude. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149214/2086_149214_000006_000004.wav",
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
    "TestID": "NAT---2086_149220_000007_000003",
    "Text": "<br>So wise, as well as antique, was their aspect, as to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;give color to the idea, not merely that they were <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the descendants of a time honored race, but that they <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;had existed, in their individual capacity, ever since the House <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the Seven Gables was founded, and were somehow mixed <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;up with its destiny. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000007_000003.wav",
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
    "TestID": "NAT---2086_149220_000016_000003",
    "Text": "<br>In short, I make pictures out of sunshine; and, not to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;be too much dazzled with my own trade, I have <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prevailed with Miss Hepzibah to let me lodge in one <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of these dusky gables. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000016_000003.wav",
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
    "TestID": "NAT---2086_149220_000027_000001",
    "Text": "<br>`As to his character, we need not discuss its points; they <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;have already been settled by a competent tribunal, or one <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;which called itself competent. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000027_000001.wav",
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
    "TestID": "NAT---2086_149220_000028_000000",
    "Text": "<br>Phoebe was on the point of retreating, but turned back, with <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;some hesitation; for she did not exactly comprehend his manner, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;although, on better observation, its feature seemed rather to be <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lack of ceremony than any approach to offensive rudeness. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000028_000000.wav",
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
    "TestID": "NAT---2086_149220_000029_000001",
    "Text": "<br>Coming fresh from country air and occupations, you will soon feel <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the need of some such out of door employment. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000029_000001.wav",
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
    "TestID": "NAT---2086_149220_000034_000000",
    "Text": "<br>`Maule's well!` answered Phoebe. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000034_000000.wav",
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
    "TestID": "NAT---2086_149220_000047_000000",
    "Text": "<br>`Phoebe, my dear little girl,` said Hepzibah, after a moment's pause, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`you were up betimes, and have been busy all day. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2086/149220/2086_149220_000047_000000.wav",
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
    "TestID": "NAT---2277_149874_000025_000003",
    "Text": "<br>If Hanson sat every evening in the front room and read <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his paper, if he went to bed at nine, and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minnie a little later, what would they expect of her? <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149874/2277_149874_000025_000003.wav",
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
    "TestID": "NAT---2277_149896_000017_000000",
    "Text": "<br>Later, however, his old discretion asserted itself. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149896/2277_149896_000017_000000.wav",
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
    "TestID": "NAT---2277_149897_000006_000004",
    "Text": "<br>It seemed a monstrous, unnatural, unwarranted condition which had suddenly descended <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;upon him without his let or hindrance. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000006_000004.wav",
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
    "TestID": "NAT---2277_149897_000009_000000",
    "Text": "<br>For all his study nothing came of the evening except this-he <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sent the money. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000009_000000.wav",
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
    "TestID": "NAT---2277_149897_000016_000001",
    "Text": "<br>I know her.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000016_000001.wav",
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
    "TestID": "NAT---2277_149897_000020_000004",
    "Text": "<br>But, oh, the wretchedness of being forced this way! ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000020_000004.wav",
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
    "TestID": "NAT---2277_149897_000038_000000",
    "Text": "<br>`Well!` he said after a time, quite audibly, `I don't know.` <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000038_000000.wav",
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
    "TestID": "NAT---2277_149897_000040_000001",
    "Text": "<br>He was quite certain now that she knew he was married <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and was angered at his perfidy. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000040_000001.wav",
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
    "TestID": "NAT---2277_149897_000045_000000",
    "Text": "<br>One of the galling incidents of this visit was that he <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;came back on a Randolph Street car, and without noticing <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrived almost opposite the building of the concern with which <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his son was connected. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2277/149897/2277_149897_000045_000000.wav",
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
    "TestID": "NAT---2412_153954_000007_000005",
    "Text": "<br>Both of them appeared astonished at seeing one who was evidently <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a stranger, but they were too ill to come up <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to me, and form conclusions concerning me. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000007_000005.wav",
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
    "TestID": "NAT---2412_153954_000007_000006",
    "Text": "<br>These two were first called out; and in about a quarter <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of an hour I was made to follow them, which <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I did in some fear, and with much curiosity. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000007_000006.wav",
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
    "TestID": "NAT---2412_153954_000008_000002",
    "Text": "<br>He at length asked me a single short question, which I <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;supposed meant `Who are you?` I answered in English quite <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;composedly as though he would understand me, and endeavoured to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;be my very most natural self as well as I <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;could. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000008_000002.wav",
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
    "TestID": "NAT---2412_153954_000008_000003",
    "Text": "<br>He appeared more and more puzzled, and then retired, returning with <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;two others much like himself. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2412/153954/2412_153954_000008_000003.wav",
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
    "TestID": "NAT---2428_83699_000008_000007",
    "Text": "<br>No references were offered or asked for. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000008_000007.wav",
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
    "TestID": "NAT---2428_83699_000013_000004",
    "Text": "<br>That is a fact. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000013_000004.wav",
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
    "TestID": "NAT---2428_83699_000039_000008",
    "Text": "<br>The storm rushed in; she put up her hand to shield <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the light from danger. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83699/2428_83699_000039_000008.wav",
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
    "TestID": "NAT---2428_83705_000022_000000",
    "Text": "<br>`Do you know that in marrying me you are doing the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best thing for yourself that you ever did in all <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;your life?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000022_000000.wav",
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
    "TestID": "NAT---2428_83705_000025_000002",
    "Text": "<br>I found that as a woman of business she was beyond <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all my expectations. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000025_000002.wav",
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
    "TestID": "NAT---2428_83705_000033_000005",
    "Text": "<br>But why, on that account, they should pity me, I altogether <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fail to understand. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2428/83705/2428_83705_000033_000005.wav",
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
    "TestID": "NAT---251_118436_000012_000002",
    "Text": "<br>My sister, where are you? ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/118436/251_118436_000012_000002.wav",
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
    "TestID": "NAT---251_118436_000019_000000",
    "Text": "<br>The first speaker favored him with a long, searching stare. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/118436/251_118436_000019_000000.wav",
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
    "TestID": "NAT---251_118436_000025_000000",
    "Text": "<br>'By which a soul is drawn from its body and across <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gulfs of echoing space,' returned the man on the mat. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/118436/251_118436_000025_000000.wav",
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
    "TestID": "NAT---251_118436_000026_000000",
    "Text": "<br>The nobleman studied him curiously. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/118436/251_118436_000026_000000.wav",
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
    "TestID": "NAT---251_136532_000011_000000",
    "Text": "<br>`Where?` they asked together. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/136532/251_136532_000011_000000.wav",
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
    "TestID": "NAT---251_136532_000019_000002",
    "Text": "<br>That's why you had so much trouble breaking in; they'd sealed <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the room on the inside.` He straightened and went around <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the room, until he found a ventilator, and peered into <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/136532/251_136532_000019_000002.wav",
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
    "TestID": "NAT---251_136532_000020_000000",
    "Text": "<br>Sid and Gloria made the most of it. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/136532/251_136532_000020_000000.wav",
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
    "TestID": "NAT---251_136532_000020_000001",
    "Text": "<br>The Terran public wanted to hear about Martians, and if live <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Martians couldn't be found, a room full of dead ones <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;was the next best thing. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/136532/251_136532_000020_000001.wav",
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
    "TestID": "NAT---251_137823_000013_000000",
    "Text": "<br>Electronic equipment cascaded from the wall shelves, and a heavy duty <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain hoist came loose from its overhead track, plunging to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the floor with a terrifying crash. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000013_000000.wav",
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
    "TestID": "NAT---251_137823_000022_000001",
    "Text": "<br>With a desperate heave, he shoved the beam away, then cradled <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bud's head in his arm. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000022_000001.wav",
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
    "TestID": "NAT---251_137823_000024_000003",
    "Text": "<br>What hit me?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000024_000003.wav",
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
    "TestID": "NAT---251_137823_000033_000002",
    "Text": "<br>Then Tom taped a bandage on Bud's scalp wound. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000033_000002.wav",
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
    "TestID": "NAT---251_137823_000042_000001",
    "Text": "<br>`Why not send a car? ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000042_000001.wav",
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
    "TestID": "NAT---251_137823_000044_000001",
    "Text": "<br>`Anyhow, we want to help. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000044_000001.wav",
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
    "TestID": "NAT---251_137823_000052_000000",
    "Text": "<br>The helicopter arrived within twenty minutes at the place Tom had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;named. After landing at Enterprises, the boys drove to the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pleasant, tree shaded Swift home on the outskirts of town. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/251/137823/251_137823_000052_000000.wav",
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
    "TestID": "NAT---2803_154320_000004_000004",
    "Text": "<br>Besides, they were going to this new and ill reputed country <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;without enthusiasm, without conviction, not even of their own free <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will, but solely at the bidding of destiny. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154320/2803_154320_000004_000004.wav",
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
    "TestID": "NAT---2803_154328_000007_000000",
    "Text": "<br>Then Glenarvan, taking his friends aside, said: `My dear friends, our <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lives and the lives of these poor women are in <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;God's hands. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000007_000000.wav",
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
    "TestID": "NAT---2803_154328_000039_000000",
    "Text": "<br>`Brave lad!` repeated Glenarvan. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000039_000000.wav",
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
    "TestID": "NAT---2803_154328_000047_000000",
    "Text": "<br>`Let us be off!` said he, in a decided tone. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000047_000000.wav",
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
    "TestID": "NAT---2803_154328_000065_000000",
    "Text": "<br>Glenarvan and Lady Helena immediately ventured out of the grotto. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000065_000000.wav",
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
    "TestID": "NAT---2803_154328_000069_000000",
    "Text": "<br>They had reached half-way down the slope, when a voice was <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;heard from the opening of the grotto. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/154328/2803_154328_000069_000000.wav",
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
    "TestID": "NAT---2803_161169_000005_000008",
    "Text": "<br>The least they could do would be to try to use <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;every thing for the purposes intended, and not to destroy <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or injure any of the precious gifts prepared so lovingly <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for their use. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2803/161169/2803_161169_000005_000008.wav",
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
    "TestID": "NAT---2902_9008_000002_000000",
    "Text": "<br>On the left of the garden stretched the lofty eastern front <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the Museum itself, with its picture galleries, halls of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statuary, dining halls, and lecture rooms; one huge wing containing <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that famous library, founded by the father of Philadelphus, which <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hold in the time of Seneca, even after the destruction <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of a great part of it in Caesar's siege, four <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hundred thousand manuscripts. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/2902/9008/2902_9008_000002_000000.wav",
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
    "TestID": "NAT---3000_15664_000002_000000",
    "Text": "<br>Arctic beauty and desolation, with their blessings and dangers, all may <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;be found here, to test the endurance and skill of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adventurous climbers; but far better than climbing the mountain is <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;going around its warm, fertile base, enjoying its bounties like <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a bee circling around a bank of flowers. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000002_000000.wav",
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
    "TestID": "NAT---3000_15664_000004_000001",
    "Text": "<br>One glacier after another comes into view, and the outlines of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the mountain are ever changing, though all the way around, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from whatever point of view, the form is maintained of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a grand, simple cone with a gently sloping base and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rugged, crumbling ridges separating the glaciers and the snowfields more <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or less completely. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000004_000001.wav",
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
    "TestID": "NAT---3000_15664_000014_000000",
    "Text": "<br>Sheep Rock is about twenty miles from Sisson's, and is one <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of the principal winter pasture grounds of the wild sheep, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from which it takes its name. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000014_000000.wav",
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
    "TestID": "NAT---3000_15664_000039_000003",
    "Text": "<br>Even the sky is not safe from scath-blurred and blackened whole <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;summers together with the smoke of fires that devour the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;woods. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3000/15664/3000_15664_000039_000003.wav",
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
    "TestID": "NAT---3170_137482_000008_000000",
    "Text": "<br>The city was alive with complaints, and we laughed at the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useless search made by the police to find out those <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;who disturbed the peace of the inhabitants. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000008_000000.wav",
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
    "TestID": "NAT---3170_137482_000016_000001",
    "Text": "<br>We intend only to take some refreshment at the Rialto, and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;then we will take you home in safety.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000016_000001.wav",
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
    "TestID": "NAT---3170_137482_000022_000000",
    "Text": "<br>Two days afterwards, our nocturnal orgy began to be talked of. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000022_000000.wav",
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
    "TestID": "NAT---3170_137482_000032_000000",
    "Text": "<br>An hour later, two noblemen, friends of the senator, came in, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one a few minutes after the other. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000032_000000.wav",
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
    "TestID": "NAT---3170_137482_000058_000008",
    "Text": "<br>They were not only good Christians and faithful to the Church, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but even real devotees and full of scruples. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3170/137482/3170_137482_000058_000008.wav",
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
    "TestID": "NAT---3536_23268_000008_000000",
    "Text": "<br>`I mistook-for I had before given my word that I should <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass it abroad.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3536/23268/3536_23268_000008_000000.wav",
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
    "TestID": "NAT---3536_8226_000020_000006",
    "Text": "<br>But as for this here child, b--.` At that moment there <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;came a knock at the door. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3536/8226/3536_8226_000020_000006.wav",
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
    "TestID": "NAT---3536_8226_000027_000002",
    "Text": "<br>He have been up all this month, sir.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3536/8226/3536_8226_000027_000002.wav",
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
    "TestID": "NAT---3752_4943_000054_000004",
    "Text": "<br>Must stop that. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4943/3752_4943_000054_000004.wav",
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
    "TestID": "NAT---3752_4943_000059_000003",
    "Text": "<br>I'll be down in the morning myself if I can.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4943/3752_4943_000059_000003.wav",
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
    "TestID": "NAT---3752_4944_000029_000000",
    "Text": "<br>`I saw them tried at Hobart Town,` said Meekin. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000029_000000.wav",
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
    "TestID": "NAT---3752_4944_000033_000000",
    "Text": "<br>`Oh! there's no fear of him,` said Burgess cheerily; `if he <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grows uproarious, we'll soon give him a touch of the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000033_000000.wav",
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
    "TestID": "NAT---3752_4944_000055_000001",
    "Text": "<br>`He can't stand it. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000055_000001.wav",
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
    "TestID": "NAT---3752_4944_000059_000000",
    "Text": "<br>`He was put into the long dormitory,` said North; `you know <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what sort of a place that is. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000059_000000.wav",
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
    "TestID": "NAT---3752_4944_000100_000007",
    "Text": "<br>He saw in the darkness the brandy bottle-vulgar and terrible apparition! <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3752/4944/3752_4944_000100_000007.wav",
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
    "TestID": "NAT---3853_163249_000035_000000",
    "Text": "<br>`You mean it?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000035_000000.wav",
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
    "TestID": "NAT---3853_163249_000075_000001",
    "Text": "<br>Nature abhors a vacuum, and when food fell short patriotism had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a chance to fill the aching void. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000075_000001.wav",
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
    "TestID": "NAT---3853_163249_000117_000000",
    "Text": "<br>`I'll keep it, David.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000117_000000.wav",
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
    "TestID": "NAT---3853_163249_000146_000001",
    "Text": "<br>Power is waiting: are you ready, love?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/3853/163249/3853_163249_000146_000001.wav",
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
    "TestID": "NAT---5338_284437_000041_000001",
    "Text": "<br>Pretty wet Was the journey, you can bet!` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5338/284437/5338_284437_000041_000001.wav",
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
    "TestID": "NAT---5536_43359_000001_000001",
    "Text": "<br>THE FAMILY ALTAR ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000001_000001.wav",
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
    "TestID": "NAT---5536_43359_000017_000004",
    "Text": "<br>Modesty was her chief adornment; hence the younger women were usually <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;silent and retiring: but a woman who had attained to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ripeness of years and wisdom, or who had displayed notable <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;courage in some emergency, was sometimes invited to a seat <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the council. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000017_000004.wav",
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
    "TestID": "NAT---5536_43359_000020_000000",
    "Text": "<br>Indian names were either characteristic nicknames given in a playful spirit, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;deed names, birth names, or such as have a religious <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and symbolic meaning. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5536/43359/5536_43359_000020_000000.wav",
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
    "TestID": "NAT---5536_43363_000017_000000",
    "Text": "<br>At another time, when I was fourteen years old, we had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;just left Fort Ellis on the Assiniboine River, and my <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;youngest uncle had selected a fine spot for our night <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;camp. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5536/43363/5536_43363_000017_000000.wav",
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
    "TestID": "NAT---5694_64025_000018_000000",
    "Text": "<br>Gunboats and transports were busily crossing Buell's army all of Sunday <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;night. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64025/5694_64025_000018_000000.wav",
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
    "TestID": "NAT---5694_64025_000019_000002",
    "Text": "<br>w h rushed forward and grabbed his horse by the bridle, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;telling him at the same time to surrender. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64025/5694_64025_000019_000002.wav",
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
    "TestID": "NAT---5694_64029_000008_000001",
    "Text": "<br>I was perfectly willing to let the spy go on his <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;way rejoicing-for such he was-but he wanted to capture a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rebel. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000008_000001.wav",
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
    "TestID": "NAT---5694_64029_000012_000001",
    "Text": "<br>March, I say.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000012_000001.wav",
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
    "TestID": "NAT---5694_64029_000019_000000",
    "Text": "<br>We were ordered forward to the attack. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64029/5694_64029_000019_000000.wav",
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
    "TestID": "NAT---5694_64038_000015_000003",
    "Text": "<br>I looked everywhere. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5694/64038/5694_64038_000015_000003.wav",
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
    "TestID": "NAT---5895_34615_000019_000006",
    "Text": "<br>It was automatic, and the more irresistible because it seemed petrified. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34615/5895_34615_000019_000006.wav",
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
    "TestID": "NAT---5895_34615_000023_000000",
    "Text": "<br>Let us understand each other; we will explain. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34615/5895_34615_000023_000000.wav",
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
    "TestID": "NAT---5895_34622_000005_000003",
    "Text": "<br>Sometimes he felt regret. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34622/5895_34622_000005_000003.wav",
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
    "TestID": "NAT---5895_34622_000038_000000",
    "Text": "<br>This opening looked for all the world like a `mouth of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hell,` in the words of the itinerant Puritan preachers, who <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;turned away from it with horror. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34622/5895_34622_000038_000000.wav",
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
    "TestID": "NAT---5895_34629_000006_000001",
    "Text": "<br>It was a brave thing to dedicate a cathedral to saint <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Paul. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34629/5895_34629_000006_000001.wav",
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
    "TestID": "NAT---5895_34629_000036_000000",
    "Text": "<br>They had a great friend in this unknown visitor. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/5895/34629/5895_34629_000036_000000.wav",
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
    "TestID": "NAT---6241_61943_000009_000000",
    "Text": "<br>`Sublime madman,` thought I, `you doubtless would approve our proceedings. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6241/61943/6241_61943_000009_000000.wav",
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
    "TestID": "NAT---6241_61943_000023_000000",
    "Text": "<br>Then without further remark, he put his finger to his lips, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frowned darkly, and descended into the small boat which awaited <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;us. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6241/61943/6241_61943_000023_000000.wav",
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
    "TestID": "NAT---6241_61946_000033_000001",
    "Text": "<br>The sweeping and broken waves came rolling in upon the pointed <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rocks; the gulf was surrounded by rocky walls-a mighty cliff, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;three thousand feet in height, remarkable for its brown strata, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;separated here and there by beds of tufa of a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reddish hue. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6241/61946/6241_61946_000033_000001.wav",
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
    "TestID": "NAT---6241_66616_000012_000001",
    "Text": "<br>Those who were left moved to the vicinity of the Post. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6241/66616/6241_66616_000012_000001.wav",
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
    "TestID": "NAT---6295_244435_000015_000001",
    "Text": "<br>`Colonel Kenton writes wisely. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6295/244435/6295_244435_000015_000001.wav",
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
    "TestID": "NAT---6295_64301_000002_000001",
    "Text": "<br>It was the afternoon of a holiday, and she had closed <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;early. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6295/64301/6295_64301_000002_000001.wav",
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
    "TestID": "NAT---6313_66125_000016_000000",
    "Text": "<br>`Looks like a clump of bushes down there. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66125/6313_66125_000016_000000.wav",
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
    "TestID": "NAT---6313_66125_000064_000001",
    "Text": "<br>`Better lie down so you, too, don't take a notion to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fall off. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66125/6313_66125_000064_000001.wav",
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
    "TestID": "NAT---6313_66129_000016_000001",
    "Text": "<br>`I don't need guns to hunt with. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000016_000001.wav",
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
    "TestID": "NAT---6313_66129_000036_000001",
    "Text": "<br>`I'd lose my dignity for a mouthful of that, any day,` <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;he decided after having sampled the combination. `President Brown, I <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;withdraw my criticism. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000036_000001.wav",
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
    "TestID": "NAT---6313_66129_000038_000000",
    "Text": "<br>`I reckon there are,` smiled the guide. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000038_000000.wav",
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
    "TestID": "NAT---6313_66129_000064_000002",
    "Text": "<br>Ned took his defeat good naturedly. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000064_000002.wav",
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
    "TestID": "NAT---6313_66129_000088_000000",
    "Text": "<br>`Be careful, Chunky,` warned Walter. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/66129/6313_66129_000088_000000.wav",
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
    "TestID": "NAT---6313_76958_000024_000000",
    "Text": "<br>`Beds?` grunted Big foot. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000024_000000.wav",
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
    "TestID": "NAT---6313_76958_000025_000000",
    "Text": "<br>`You will find your stuff rolled up under the chuck wagon, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boys,` said Stallings. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000025_000000.wav",
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
    "TestID": "NAT---6313_76958_000038_000001",
    "Text": "<br>Get a move on you and keep still. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000038_000001.wav",
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
    "TestID": "NAT---6313_76958_000048_000000",
    "Text": "<br>His warning came too late. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000048_000000.wav",
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
    "TestID": "NAT---6313_76958_000083_000000",
    "Text": "<br>`I guess there are some words that aren't in the dictionary,` <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;laughed Tad. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000083_000000.wav",
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
    "TestID": "NAT---6313_76958_000089_000000",
    "Text": "<br>`Pong, tell the young gentlemen what would become of you if <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you were to serve bad meals to this outfit of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cowpunchers.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000089_000000.wav",
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
    "TestID": "NAT---6313_76958_000094_000000",
    "Text": "<br>`Oh, you mean they would shoot you?` asked Walter. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6313/76958/6313_76958_000094_000000.wav",
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
    "TestID": "NAT---6319_275224_000015_000000",
    "Text": "<br>And so she did, and a new light seemed to dawn <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;upon her as she recollected the spring and autumnal prunings <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she regularly underwent, and the quantities of little branches that <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;were yearly cut from her sides, and carried away in <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a wheel barrow. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000015_000000.wav",
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
    "TestID": "NAT---6319_275224_000018_000000",
    "Text": "<br>Then the white Lily called out to him in great wrath, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and told him he mistook their characters altogether. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000018_000000.wav",
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
    "TestID": "NAT---6319_275224_000021_000002",
    "Text": "<br>In short, in one half hour he desolated the pretty garden; <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and when his work was accomplished, he flew off. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000021_000002.wav",
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
    "TestID": "NAT---6319_275224_000022_000001",
    "Text": "<br>The Wind was scarcely gone before a sudden and heavy rain <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;followed, so that all was confusion for some time. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000022_000001.wav",
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
    "TestID": "NAT---6319_275224_000022_000007",
    "Text": "<br>She felt the muddy weight as it soaked into her beautiful <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;velvet bells, and could have cried for grief: she could <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;never free herself from this nuisance. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/275224/6319_275224_000022_000007.wav",
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
    "TestID": "NAT---6319_57405_000007_000001",
    "Text": "<br>Once every year he had gone to the land of the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Caucasus to talk with his father, who was hanging chained <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to the mountain peak. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/57405/6319_57405_000007_000001.wav",
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
    "TestID": "NAT---6319_64726_000015_000001",
    "Text": "<br>He had not a moment's doubt that he was destined to <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this great adventure, and full of ardour he determined at <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;once to set out for the castle. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6319/64726/6319_64726_000015_000001.wav",
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
    "TestID": "NAT---6345_64257_000008_000008",
    "Text": "<br>It was all deadness. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/64257/6345_64257_000008_000008.wav",
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
    "TestID": "NAT---6345_64257_000009_000011",
    "Text": "<br>Everything is an empty dream of loss. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/64257/6345_64257_000009_000011.wav",
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
    "TestID": "NAT---6345_93302_000036_000002",
    "Text": "<br>She would have liked to meet him in some green, cool <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orchard, where daffodils swung in the long grass, and primroses <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stood on frail stiff little pink stalks in the wet, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;scented moss of the hedgerow. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000036_000002.wav",
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
    "TestID": "NAT---6345_93302_000037_000007",
    "Text": "<br>He came towards her; he was five minutes late. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000037_000007.wav",
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
    "TestID": "NAT---6345_93302_000062_000003",
    "Text": "<br>No-it's no use-I can never, never forgive you-and it's all over. <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/93302/6345_93302_000062_000003.wav",
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
    "TestID": "NAT---6345_93306_000023_000003",
    "Text": "<br>It would have turned out all right with them. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/93306/6345_93306_000023_000003.wav",
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
    "TestID": "NAT---6345_93306_000043_000001",
    "Text": "<br>Love at first sight is all nonsense, we know-we who have <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;come to forty year-but at twenty one one does not <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;somehow recognise it for the nonsense it is. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/6345/93306/6345_93306_000043_000001.wav",
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
    "TestID": "NAT---652_130737_000021_000000",
    "Text": "<br>Chateau Lafitte: Has beautiful color and delicate flavor. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/652/130737/652_130737_000021_000000.wav",
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
    "TestID": "NAT---777_126732_000076_000005",
    "Text": "<br>I wouldn't give a halfpenny for the whole lot. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/777/126732/777_126732_000076_000005.wav",
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
    "TestID": "NAT---7850_286674_000002_000004",
    "Text": "<br>It is disgraceful!` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7850/286674/7850_286674_000002_000004.wav",
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
    "TestID": "NAT---7850_286674_000005_000000",
    "Text": "<br>Like most growing children, the Dragon Fly larvae and Nymphs had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to eat a great deal. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7850/286674/7850_286674_000005_000000.wav",
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
    "TestID": "NAT---7850_73752_000003_000015",
    "Text": "<br>He could not flatter himself that he indeed merited such singular <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;blessings; and yet with all his faults, which with him <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;were but the consequences of his fiery youth, Ferdinand had <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;been faithful, to Henrietta. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7850/73752/7850_73752_000003_000015.wav",
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
    "TestID": "NAT---7850_73752_000009_000004",
    "Text": "<br>It is here that we should get our speeches by heart, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invent our impromptus; muse over the caprices of our mistresses, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;destroy a cabinet, and save a nation. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7850/73752/7850_73752_000009_000004.wav",
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
    "TestID": "NAT---7976_105575_000011_000010",
    "Text": "<br>Under the same quiet moonlight, and only six hundred yards away <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from us, also lay the victorious Rebel army. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000011_000010.wav",
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
    "TestID": "NAT---7976_105575_000014_000000",
    "Text": "<br>It was soon full day. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000014_000000.wav",
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
    "TestID": "NAT---7976_105575_000014_000004",
    "Text": "<br>Yes, it was `hell.` I hastened back to the lines. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000014_000004.wav",
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
    "TestID": "NAT---7976_105575_000020_000002",
    "Text": "<br>On inquiry for certain ones I learned that they were dead <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and lying out in the improvised graveyard near by. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/105575/7976_105575_000020_000002.wav",
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
    "TestID": "NAT---7976_110124_000026_000000",
    "Text": "<br>`I am thinking that our dear father would be anxious if <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;he knew that we had broken our promise so easily,` <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;said the youngest sister. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000026_000000.wav",
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
    "TestID": "NAT---7976_110124_000031_000001",
    "Text": "<br>The youngest one was so frightened that she could not sleep <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a single wink. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000031_000001.wav",
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
    "TestID": "NAT---7976_110124_000063_000000",
    "Text": "<br>`Our little sister was wiser than we were,` said the middle <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;daughter. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110124/7976_110124_000063_000000.wav",
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
    "TestID": "NAT---7976_110523_000006_000000",
    "Text": "<br>Once upon a time there dwelt near a large wood a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;poor wood cutter, with his wife, and two children by <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his former marriage, a little boy called Hansel, and a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;girl named Grethel. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000006_000000.wav",
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
    "TestID": "NAT---7976_110523_000010_000001",
    "Text": "<br>Grethel wept bitterly, and said to Hansel, `What will become of <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;us?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000010_000001.wav",
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
    "TestID": "NAT---7976_110523_000027_000002",
    "Text": "<br>Will they not be sweet?` So Hansel reached up and broke <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a piece off the roof, in order to see how <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it tasted; while Grethel stepped up to the window and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;began to bite it. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/7976/110523/7976_110523_000027_000002.wav",
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
    "TestID": "NAT---8297_275154_000000_000001",
    "Text": "<br>Listen to Reason. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275154/8297_275154_000000_000001.wav",
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
    "TestID": "NAT---8297_275154_000008_000002",
    "Text": "<br>He could only point to a seat. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275154/8297_275154_000008_000002.wav",
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
    "TestID": "NAT---8297_275155_000028_000006",
    "Text": "<br>Vessel found bottom upward in the middle of the Atlantic, and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;everybody on board drowned, of course. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000028_000006.wav",
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
    "TestID": "NAT---8297_275155_000029_000000",
    "Text": "<br>Randal decided on leaving her. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000029_000000.wav",
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
    "TestID": "NAT---8297_275155_000038_000001",
    "Text": "<br>`Be so good,` he said, `as to tell Catherine that I <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try to make every possible allowance for her, but that <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I cannot consent to sit at her dinner table, and <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;that I dare not face my poor little niece, after <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;what I have heard.` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275155/8297_275155_000038_000001.wav",
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
    "TestID": "NAT---8297_275156_000013_000006",
    "Text": "<br>Have you seen Catherine lately?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000013_000006.wav",
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
    "TestID": "NAT---8297_275156_000015_000001",
    "Text": "<br>When will you ask her to let me see Kitty?` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000015_000001.wav",
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
    "TestID": "NAT---8297_275156_000017_000002",
    "Text": "<br>If he followed his inclinations, in the near neighborhood of the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hotel, who could say what disasters might not ensue, in <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;his brother's present frame of mind? ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/8297/275156/8297_275156_000017_000002.wav",
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
    "TestID": "NAT---84_121123_000009_000008",
    "Text": "<br>`See, my father, see!` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121123/84_121123_000009_000008.wav",
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
    "TestID": "NAT---84_121123_000011_000007",
    "Text": "<br>Tell them-oh, tell them, that corpse belongs to me!` ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121123/84_121123_000011_000007.wav",
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
    "TestID": "NAT---84_121123_000028_000000",
    "Text": "<br>`And will you direct us?` exclaimed the young man. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121123/84_121123_000028_000000.wav",
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
    "TestID": "NAT---84_121550_000010_000000",
    "Text": "<br>A softly breathing air, that no mutation Had in itself, upon <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the forehead smote me No heavier blow than of a <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gentle wind, ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121550/84_121550_000010_000000.wav",
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
    "TestID": "NAT---84_121550_000097_000000",
    "Text": "<br>Not only Rome with no such splendid car E'er gladdened Africanus, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or Augustus, But poor to it that of the Sun <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;would be,-- ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121550/84_121550_000097_000000.wav",
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
    "TestID": "NAT---84_121550_000193_000000",
    "Text": "<br>Up to my throat she in the stream had drawn me, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And, dragging me behind her, she was moving Upon the <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;water lightly as a shuttle. ",
    "Files": {
      "ground_truth": "./audio/ground-truth/dev-clean/84/121550/84_121550_000193_000000.wav",
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