var TestConfig = {
  "TestName": "Speech Naturalness Evaluation",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "shoinoue@link.cuhk.edu.cn",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets":
[
  {
    "Name": "0011_000021",
    "TestID": "NAT---0011_000021",
    "Text": "As rich as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000021.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000021.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000021-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000021-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000021-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000021-0.wav",
    }
  },
  {
    "Name": "0011_000036",
    "TestID": "NAT---0011_000036",
    "Text": "How I hate this foul pool!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000036.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000036.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000036-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000036-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000036-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000036-0.wav",
    }
  },
  {
    "Name": "0011_000374",
    "TestID": "NAT---0011_000374",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000374.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000374.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000374-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000374-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000374-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000374-0.wav",
    }
  },
  {
    "Name": "0011_000377",
    "TestID": "NAT---0011_000377",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000377.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000377.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000377-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000377-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000377-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000377-0.wav",
    }
  },
  {
    "Name": "0011_000734",
    "TestID": "NAT---0011_000734",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000734.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000734.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000734-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000734-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000734-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000734-0.wav",
    }
  },
  {
    "Name": "0011_000736",
    "TestID": "NAT---0011_000736",
    "Text": "How I hate this foul pool!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_000736.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_000736.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_000736-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_000736-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_000736-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_000736-0.wav",
    }
  },
  {
    "Name": "0011_001072",
    "TestID": "NAT---0011_001072",
    "Text": "And what are doves. And what are doves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_001072.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_001072.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_001072-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_001072-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_001072-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_001072-0.wav",
    }
  },
  {
    "Name": "0011_001074",
    "TestID": "NAT---0011_001074",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_001074.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_001074.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_001074-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_001074-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_001074-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_001074-0.wav",
    }
  },
  {
    "Name": "0011_001429",
    "TestID": "NAT---0011_001429",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_001429.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_001429.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_001429-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_001429-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_001429-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_001429-0.wav",
    }
  },
  {
    "Name": "0011_001439",
    "TestID": "NAT---0011_001439",
    "Text": "Our thanks to God's oath.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0011_001439.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0011_001439.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0011_001439-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0011_001439-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0011_001439-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0011_001439-0.wav",
    }
  },
  {
    "Name": "0012_000027",
    "TestID": "NAT---0012_000027",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000027.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000027.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000027-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000027-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000027-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000027-0.wav",
    }
  },
  {
    "Name": "0012_000034",
    "TestID": "NAT---0012_000034",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000034.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000034.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000034-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000034-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000034-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000034-0.wav",
    }
  },
  {
    "Name": "0012_000378",
    "TestID": "NAT---0012_000378",
    "Text": "She had said, so that one could keep up a conversation!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000378.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000378.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000378-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000378-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000378-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000378-0.wav",
    }
  },
  {
    "Name": "0012_000379",
    "TestID": "NAT---0012_000379",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000379.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000379.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000379-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000379-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000379-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000379-0.wav",
    }
  },
  {
    "Name": "0012_000730",
    "TestID": "NAT---0012_000730",
    "Text": "Must a name mean something?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000730.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000730.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000730-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000730-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000730-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000730-0.wav",
    }
  },
  {
    "Name": "0012_000731",
    "TestID": "NAT---0012_000731",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_000731.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_000731.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_000731-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_000731-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_000731-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_000731-0.wav",
    }
  },
  {
    "Name": "0012_001079",
    "TestID": "NAT---0012_001079",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_001079.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_001079.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_001079-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_001079-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_001079-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_001079-0.wav",
    }
  },
  {
    "Name": "0012_001081",
    "TestID": "NAT---0012_001081",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_001081.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_001081.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_001081-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_001081-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_001081-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_001081-0.wav",
    }
  },
  {
    "Name": "0012_001421",
    "TestID": "NAT---0012_001421",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_001421.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_001421.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_001421-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_001421-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_001421-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_001421-0.wav",
    }
  },
  {
    "Name": "0012_001430",
    "TestID": "NAT---0012_001430",
    "Text": "Must a name mean something?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0012_001430.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0012_001430.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0012_001430-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0012_001430-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0012_001430-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0012_001430-0.wav",
    }
  },
  {
    "Name": "0013_000027",
    "TestID": "NAT---0013_000027",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000027.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000027.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000027-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000027-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000027-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000027-0.wav",
    }
  },
  {
    "Name": "0013_000033",
    "TestID": "NAT---0013_000033",
    "Text": "This used to be Jerry's occupation.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000033.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000033.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000033-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000033-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000033-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000033-0.wav",
    }
  },
  {
    "Name": "0013_000377",
    "TestID": "NAT---0013_000377",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000377.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000377.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000377-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000377-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000377-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000377-0.wav",
    }
  },
  {
    "Name": "0013_000383",
    "TestID": "NAT---0013_000383",
    "Text": "This used to be Jerry's occupation.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000383.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000383.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000383-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000383-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000383-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000383-0.wav",
    }
  },
  {
    "Name": "0013_000729",
    "TestID": "NAT---0013_000729",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000729.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000729.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000729-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000729-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000729-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000729-0.wav",
    }
  },
  {
    "Name": "0013_000731",
    "TestID": "NAT---0013_000731",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_000731.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_000731.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_000731-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_000731-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_000731-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_000731-0.wav",
    }
  },
  {
    "Name": "0013_001077",
    "TestID": "NAT---0013_001077",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_001077.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_001077.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_001077-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_001077-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_001077-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_001077-0.wav",
    }
  },
  {
    "Name": "0013_001081",
    "TestID": "NAT---0013_001081",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_001081.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_001081.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_001081-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_001081-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_001081-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_001081-0.wav",
    }
  },
  {
    "Name": "0013_001421",
    "TestID": "NAT---0013_001421",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_001421.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_001421.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_001421-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_001421-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_001421-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_001421-0.wav",
    }
  },
  {
    "Name": "0013_001431",
    "TestID": "NAT---0013_001431",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0013_001431.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0013_001431.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0013_001431-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0013_001431-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0013_001431-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0013_001431-0.wav",
    }
  },
  {
    "Name": "0014_000021",
    "TestID": "NAT---0014_000021",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000021.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000021.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000021-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000021-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000021-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000021-0.wav",
    }
  },
  {
    "Name": "0014_000032",
    "TestID": "NAT---0014_000032",
    "Text": "Who is been repeating all that hard stuff to you?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000032.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000032.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000032-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000032-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000032-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000032-0.wav",
    }
  },
  {
    "Name": "0014_000379",
    "TestID": "NAT---0014_000379",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000379.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000379.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000379-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000379-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000379-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000379-0.wav",
    }
  },
  {
    "Name": "0014_000391",
    "TestID": "NAT---0014_000391",
    "Text": "I chose the right way.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000391.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000391.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000391-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000391-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000391-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000391-0.wav",
    }
  },
  {
    "Name": "0014_000724",
    "TestID": "NAT---0014_000724",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000724.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000724.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000724-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000724-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000724-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000724-0.wav",
    }
  },
  {
    "Name": "0014_000732",
    "TestID": "NAT---0014_000732",
    "Text": "Who is been repeating all that hard stuff to you?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_000732.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_000732.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_000732-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_000732-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_000732-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_000732-0.wav",
    }
  },
  {
    "Name": "0014_001081",
    "TestID": "NAT---0014_001081",
    "Text": "All smile were real and the happier，the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_001081.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_001081.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_001081-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_001081-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_001081-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_001081-0.wav",
    }
  },
  {
    "Name": "0014_001084",
    "TestID": "NAT---0014_001084",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_001084.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_001084.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_001084-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_001084-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_001084-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_001084-0.wav",
    }
  },
  {
    "Name": "0014_001433",
    "TestID": "NAT---0014_001433",
    "Text": "This used to be Jerry's occupation.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_001433.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_001433.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_001433-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_001433-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_001433-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_001433-0.wav",
    }
  },
  {
    "Name": "0014_001446",
    "TestID": "NAT---0014_001446",
    "Text": "They'd never know I'd regular ran away.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0014_001446.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0014_001446.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0014_001446-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0014_001446-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0014_001446-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0014_001446-0.wav",
    }
  },
  {
    "Name": "0015_000026",
    "TestID": "NAT---0015_000026",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000026.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000026.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000026-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000026-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000026-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000026-0.wav",
    }
  },
  {
    "Name": "0015_000029",
    "TestID": "NAT---0015_000029",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000029.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000029.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000029-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000029-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000029-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000029-0.wav",
    }
  },
  {
    "Name": "0015_000374",
    "TestID": "NAT---0015_000374",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000374.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000374.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000374-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000374-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000374-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000374-0.wav",
    }
  },
  {
    "Name": "0015_000377",
    "TestID": "NAT---0015_000377",
    "Text": "Monster made a deep bow.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000377.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000377.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000377-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000377-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000377-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000377-0.wav",
    }
  },
  {
    "Name": "0015_000721",
    "TestID": "NAT---0015_000721",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000721.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000721.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000721-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000721-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000721-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000721-0.wav",
    }
  },
  {
    "Name": "0015_000726",
    "TestID": "NAT---0015_000726",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_000726.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_000726.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_000726-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_000726-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_000726-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_000726-0.wav",
    }
  },
  {
    "Name": "0015_001072",
    "TestID": "NAT---0015_001072",
    "Text": "And what are doves. And what are doves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_001072.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_001072.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_001072-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_001072-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_001072-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_001072-0.wav",
    }
  },
  {
    "Name": "0015_001075",
    "TestID": "NAT---0015_001075",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_001075.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_001075.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_001075-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_001075-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_001075-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_001075-0.wav",
    }
  },
  {
    "Name": "0015_001433",
    "TestID": "NAT---0015_001433",
    "Text": "This used to be Jerry's occupation.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_001433.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_001433.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_001433-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_001433-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_001433-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_001433-0.wav",
    }
  },
  {
    "Name": "0015_001434",
    "TestID": "NAT---0015_001434",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0015_001434.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0015_001434.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0015_001434-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0015_001434-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0015_001434-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0015_001434-0.wav",
    }
  },
  {
    "Name": "0016_000025",
    "TestID": "NAT---0016_000025",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000025.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000025.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000025-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000025-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000025-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000025-0.wav",
    }
  },
  {
    "Name": "0016_000031",
    "TestID": "NAT---0016_000031",
    "Text": "All smile were real and the happier the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000031.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000031.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000031-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000031-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000031-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000031-0.wav",
    }
  },
  {
    "Name": "0016_000375",
    "TestID": "NAT---0016_000375",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000375.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000375.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000375-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000375-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000375-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000375-0.wav",
    }
  },
  {
    "Name": "0016_000381",
    "TestID": "NAT---0016_000381",
    "Text": "All smile were real and the happier the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000381.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000381.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000381-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000381-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000381-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000381-0.wav",
    }
  },
  {
    "Name": "0016_000721",
    "TestID": "NAT---0016_000721",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000721.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000721.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000721-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000721-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000721-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000721-0.wav",
    }
  },
  {
    "Name": "0016_000740",
    "TestID": "NAT---0016_000740",
    "Text": "In which fox loses a tail and its elder sister finds one.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_000740.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_000740.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_000740-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_000740-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_000740-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_000740-0.wav",
    }
  },
  {
    "Name": "0016_001075",
    "TestID": "NAT---0016_001075",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_001075.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_001075.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_001075-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_001075-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_001075-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_001075-0.wav",
    }
  },
  {
    "Name": "0016_001087",
    "TestID": "NAT---0016_001087",
    "Text": "I think it'll encourage me.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_001087.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_001087.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_001087-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_001087-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_001087-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_001087-0.wav",
    }
  },
  {
    "Name": "0016_001430",
    "TestID": "NAT---0016_001430",
    "Text": "Must a name mean something?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_001430.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_001430.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_001430-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_001430-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_001430-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_001430-0.wav",
    }
  },
  {
    "Name": "0016_001434",
    "TestID": "NAT---0016_001434",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0016_001434.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0016_001434.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0016_001434-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0016_001434-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0016_001434-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0016_001434-0.wav",
    }
  },
  {
    "Name": "0017_000022",
    "TestID": "NAT---0017_000022",
    "Text": "And what are doves. And what are doves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000022.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000022.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000022-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000022-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000022-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000022-0.wav",
    }
  },
  {
    "Name": "0017_000025",
    "TestID": "NAT---0017_000025",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000025.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000025.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000025-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000025-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000025-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000025-0.wav",
    }
  },
  {
    "Name": "0017_000376",
    "TestID": "NAT---0017_000376",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000376.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000376.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000376-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000376-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000376-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000376-0.wav",
    }
  },
  {
    "Name": "0017_000386",
    "TestID": "NAT---0017_000386",
    "Text": "How I hate this foul pool!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000386.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000386.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000386-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000386-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000386-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000386-0.wav",
    }
  },
  {
    "Name": "0017_000723",
    "TestID": "NAT---0017_000723",
    "Text": "I thought you meant how old are you?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000723.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000723.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000723-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000723-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000723-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000723-0.wav",
    }
  },
  {
    "Name": "0017_000730",
    "TestID": "NAT---0017_000730",
    "Text": "Must a name mean something?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_000730.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_000730.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_000730-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_000730-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_000730-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_000730-0.wav",
    }
  },
  {
    "Name": "0017_001074",
    "TestID": "NAT---0017_001074",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_001074.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_001074.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_001074-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_001074-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_001074-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_001074-0.wav",
    }
  },
  {
    "Name": "0017_001081",
    "TestID": "NAT---0017_001081",
    "Text": "All smile were real and the happier the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_001081.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_001081.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_001081-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_001081-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_001081-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_001081-0.wav",
    }
  },
  {
    "Name": "0017_001422",
    "TestID": "NAT---0017_001422",
    "Text": "And what are doves. And what are doves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_001422.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_001422.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_001422-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_001422-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_001422-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_001422-0.wav",
    }
  },
  {
    "Name": "0017_001426",
    "TestID": "NAT---0017_001426",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0017_001426.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0017_001426.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0017_001426-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0017_001426-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0017_001426-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0017_001426-0.wav",
    }
  },
  {
    "Name": "0018_000024",
    "TestID": "NAT---0018_000024",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000024.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000024.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000024-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000024-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000024-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000024-0.wav",
    }
  },
  {
    "Name": "0018_000029",
    "TestID": "NAT---0018_000029",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000029.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000029.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000029-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000029-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000029-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000029-0.wav",
    }
  },
  {
    "Name": "0018_000372",
    "TestID": "NAT---0018_000372",
    "Text": "And what are doves. And what are doves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000372.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000372.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000372-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000372-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000372-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000372-0.wav",
    }
  },
  {
    "Name": "0018_000379",
    "TestID": "NAT---0018_000379",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000379.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000379.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000379-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000379-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000379-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000379-0.wav",
    }
  },
  {
    "Name": "0018_000725",
    "TestID": "NAT---0018_000725",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000725.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000725.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000725-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000725-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000725-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000725-0.wav",
    }
  },
  {
    "Name": "0018_000729",
    "TestID": "NAT---0018_000729",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_000729.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_000729.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_000729-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_000729-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_000729-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_000729-0.wav",
    }
  },
  {
    "Name": "0018_001085",
    "TestID": "NAT---0018_001085",
    "Text": "The name really is the aged aged man.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_001085.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_001085.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_001085-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_001085-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_001085-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_001085-0.wav",
    }
  },
  {
    "Name": "0018_001089",
    "TestID": "NAT---0018_001089",
    "Text": "Our thanks to God's oath.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_001089.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_001089.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_001089-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_001089-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_001089-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_001089-0.wav",
    }
  },
  {
    "Name": "0018_001438",
    "TestID": "NAT---0018_001438",
    "Text": "Hold up my chin, slow and solid.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_001438.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_001438.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_001438-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_001438-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_001438-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_001438-0.wav",
    }
  },
  {
    "Name": "0018_001441",
    "TestID": "NAT---0018_001441",
    "Text": "I chose the right way.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0018_001441.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0018_001441.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0018_001441-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0018_001441-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0018_001441-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0018_001441-0.wav",
    }
  },
  {
    "Name": "0019_000021",
    "TestID": "NAT---0019_000021",
    "Text": "As rich-as Peter's son in law!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000021.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000021.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000021-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000021-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000021-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000021-0.wav",
    }
  },
  {
    "Name": "0019_000024",
    "TestID": "NAT---0019_000024",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000024.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000024.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000024-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000024-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000024-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000024-0.wav",
    }
  },
  {
    "Name": "0019_000378",
    "TestID": "NAT---0019_000378",
    "Text": "She had said, so that one could keep up a conversation!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000378.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000378.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000378-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000378-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000378-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000378-0.wav",
    }
  },
  {
    "Name": "0019_000384",
    "TestID": "NAT---0019_000384",
    "Text": "A divine wrath made her blue eyes awful.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000384.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000384.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000384-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000384-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000384-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000384-0.wav",
    }
  },
  {
    "Name": "0019_000726",
    "TestID": "NAT---0019_000726",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000726.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000726.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000726-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000726-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000726-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000726-0.wav",
    }
  },
  {
    "Name": "0019_000730",
    "TestID": "NAT---0019_000730",
    "Text": "Must a name mean something?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_000730.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_000730.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_000730-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_000730-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_000730-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_000730-0.wav",
    }
  },
  {
    "Name": "0019_001076",
    "TestID": "NAT---0019_001076",
    "Text": "Let's make the noise a snake.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_001076.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_001076.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_001076-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_001076-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_001076-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_001076-0.wav",
    }
  },
  {
    "Name": "0019_001078",
    "TestID": "NAT---0019_001078",
    "Text": "She had said, so that one could keep up a conversation!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_001078.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_001078.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_001078-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_001078-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_001078-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_001078-0.wav",
    }
  },
  {
    "Name": "0019_001423",
    "TestID": "NAT---0019_001423",
    "Text": "I thought you meant how old are you?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_001423.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_001423.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_001423-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_001423-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_001423-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_001423-0.wav",
    }
  },
  {
    "Name": "0019_001429",
    "TestID": "NAT---0019_001429",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0019_001429.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0019_001429.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0019_001429-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0019_001429-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0019_001429-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0019_001429-0.wav",
    }
  },
  {
    "Name": "0020_000029",
    "TestID": "NAT---0020_000029",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000029.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000029.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000029-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000029-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000029-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000029-0.wav",
    }
  },
  {
    "Name": "0020_000031",
    "TestID": "NAT---0020_000031",
    "Text": "All smile were real and the happier the more sincere .",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000031.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000031.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000031-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000031-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000031-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000031-0.wav",
    }
  },
  {
    "Name": "0020_000392",
    "TestID": "NAT---0020_000392",
    "Text": "She may mind ye of her.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000392.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000392.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000392-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000392-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000392-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000392-0.wav",
    }
  },
  {
    "Name": "0020_000393",
    "TestID": "NAT---0020_000393",
    "Text": "Story twenty nine a boy and a monkey.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000393.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000393.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000393-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000393-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000393-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000393-0.wav",
    }
  },
  {
    "Name": "0020_000724",
    "TestID": "NAT---0020_000724",
    "Text": "The football teams give a tea party.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000724.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000724.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000724-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000724-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000724-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000724-0.wav",
    }
  },
  {
    "Name": "0020_000732",
    "TestID": "NAT---0020_000732",
    "Text": "Who is been repeating all that hard stuff to you?",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_000732.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_000732.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_000732-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_000732-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_000732-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_000732-0.wav",
    }
  },
  {
    "Name": "0020_001078",
    "TestID": "NAT---0020_001078",
    "Text": "She had said, so that one could keep up a conversation!",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_001078.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_001078.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_001078-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_001078-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_001078-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_001078-0.wav",
    }
  },
  {
    "Name": "0020_001083",
    "TestID": "NAT---0020_001083",
    "Text": "This used to be Jerry's occupation.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_001083.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_001083.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_001083-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_001083-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_001083-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_001083-0.wav",
    }
  },
  {
    "Name": "0020_001425",
    "TestID": "NAT---0020_001425",
    "Text": "She is now choosing skirt to wear.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_001425.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_001425.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_001425-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_001425-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_001425-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_001425-0.wav",
    }
  },
  {
    "Name": "0020_001429",
    "TestID": "NAT---0020_001429",
    "Text": "Rat came and replied on the leaves.",
    "Files": {
      "ground_truth": "./audio/240529_TAC/ground_truth/0020_001429.wav",
      "reconstruct": "./audio/240529_TAC/expressiveness/reconstruct/0020_001429.wav",
      "OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_EPR-globaloutput-GRL_esd_fcn/0020_001429-0.wav",
      "OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn": "./audio/240529_TAC/expressiveness/OpenSMILE-OpenSMILE-WavLM_SER-globaloutput-GRL_esd_fcn/0020_001429-0.wav",
      "msemotts_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/msemotts_OpenSMILE_esd/0020_001429-0.wav",
      "relative-attributes_OpenSMILE_esd": "./audio/240529_TAC/expressiveness/relative-attributes_OpenSMILE_esd/0020_001429-0.wav",
    }
  },
]
}