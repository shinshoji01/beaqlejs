var TestConfig = {
      "TestName": "Speech Naturalness Evaluation (MUSHRA)",
      "RateScalePng": "img/scale_natural.png",
      "RateScaleBgPng": "img/scale_abs_background.png",
      "RateMinValue": 0,
      "RateMaxValue": 100,
      "RateDefaultValue":0,
      "ShowFileIDs": true,
      "ShowResults": false,
      "LoopByDefault": false,
      "EnableABLoop": true,
      "EnableOnlineSubmission": false,
      "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
      "SupervisorContact": "shoinoue@link.cuhk.edu.cn",
      "RandomizeTestOrder": true,
      "MaxTestsPerRun": 2,
      "RequireMaxRating": false,
      "AudioRoot": "",
      "Testsets":
    [
      {
        "Name": "arctic_a0017",
        "TestID": "MUSHRANAT---arctic_a0017---BWC",
        "Text": "From that moment his friendship for Belize turns to hatred and jealousy.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0017.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0017.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0017.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0017.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0017.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0017.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0017.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0017.wav",
    }
  },
      {
        "Name": "arctic_a0026",
        "TestID": "MUSHRANAT---arctic_a0026---BWC",
        "Text": "It occurred to me that there would have to be an accounting.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0026.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0026.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0026.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0026.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0026.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0026.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0026.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0026.wav",
    }
  },
      {
        "Name": "arctic_a0045",
        "TestID": "MUSHRANAT---arctic_a0045---BWC",
        "Text": "He moved away as quietly as he had come.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0045.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0045.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0045.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0045.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0045.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0045.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0045.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_a0045.wav",
    }
  },
      {
        "Name": "arctic_a0046",
        "TestID": "MUSHRANAT---arctic_a0046---BWC",
        "Text": "The girl faced him, her eyes shining with sudden fear.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0046.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0046.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0046.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0046.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0046.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0046.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0046.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0046.wav",
    }
  },
      {
        "Name": "arctic_a0053",
        "TestID": "MUSHRANAT---arctic_a0053---BWC",
        "Text": "Suddenly his fingers closed tightly over the handkerchief.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0053.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0053.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0053.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0053.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0053.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0053.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0053.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0053.wav",
    }
  },
      {
        "Name": "arctic_a0059",
        "TestID": "MUSHRANAT---arctic_a0059---BWC",
        "Text": "His immaculate appearance was gone.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0059.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0059.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0059.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0059.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0059.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0059.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0059.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0059.wav",
    }
  },
      {
        "Name": "arctic_a0065",
        "TestID": "MUSHRANAT---arctic_a0065---BWC",
        "Text": "They closed now until his fingers were like cords of steel.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0065.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0065.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0065.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0065.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0065.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0065.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0065.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0065.wav",
    }
  },
      {
        "Name": "arctic_a0069",
        "TestID": "MUSHRANAT---arctic_a0069---BWC",
        "Text": "It was his intention to return to Eileen and her father.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0069.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0069.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0069.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0069.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0069.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0069.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0069.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0069.wav",
    }
  },
      {
        "Name": "arctic_a0084",
        "TestID": "MUSHRANAT---arctic_a0084---BWC",
        "Text": "Scarcely had he uttered the name when Pierre's closing eyes shot open.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0084.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0084.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0084.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0084.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0084.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0084.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0084.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0084.wav",
    }
  },
      {
        "Name": "arctic_a0088",
        "TestID": "MUSHRANAT---arctic_a0088---BWC",
        "Text": "He made sure that the magazine was loaded, and resumed his paddling.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0088.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0088.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0088.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0088.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0088.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0088.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0088.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_a0088.wav",
    }
  },
      {
        "Name": "arctic_a0103",
        "TestID": "MUSHRANAT---arctic_a0103---BWC",
        "Text": "But there came no promise from the bow of the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0103.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0103.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0103.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0103.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0103.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0103.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0103.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0103.wav",
    }
  },
      {
        "Name": "arctic_a0109",
        "TestID": "MUSHRANAT---arctic_a0109---BWC",
        "Text": "Do you know that you are shaking my confidence in you.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0109.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0109.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0109.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0109.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0109.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0109.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0109.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0109.wav",
    }
  },
      {
        "Name": "arctic_a0154",
        "TestID": "MUSHRANAT---arctic_a0154---BWC",
        "Text": "He was smooth-shaven, and his hair and eyes were black.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0154.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0154.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0154.wav",
    }
  },
      {
        "Name": "arctic_a0175",
        "TestID": "MUSHRANAT---arctic_a0175---BWC",
        "Text": "Down there the earth was already swelling with life.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0175.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0175.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0175.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0175.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0175.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0175.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0175.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0175.wav",
    }
  },
      {
        "Name": "arctic_a0199",
        "TestID": "MUSHRANAT---arctic_a0199---BWC",
        "Text": "Thus had the raw wilderness prepared him for this day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0199.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0199.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0199.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0199.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0199.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0199.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0199.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0199.wav",
    }
  },
      {
        "Name": "arctic_a0209",
        "TestID": "MUSHRANAT---arctic_a0209---BWC",
        "Text": "It was not a large lake, and almost round.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0209.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0209.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0209.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0209.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0209.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0209.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0209.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_a0209.wav",
    }
  },
      {
        "Name": "arctic_a0216",
        "TestID": "MUSHRANAT---arctic_a0216---BWC",
        "Text": "The other felt a sudden wave of irritation rush through him.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0216.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0216.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0216.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0216.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0216.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0216.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0216.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0216.wav",
    }
  },
      {
        "Name": "arctic_a0225",
        "TestID": "MUSHRANAT---arctic_a0225---BWC",
        "Text": "I was brought up the way most girls in Hawaii are brought up.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0225.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0225.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0225.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0225.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0225.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0225.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0225.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0225.wav",
    }
  },
      {
        "Name": "arctic_a0233",
        "TestID": "MUSHRANAT---arctic_a0233---BWC",
        "Text": "I never allow what can't be changed to annoy me.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0233.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0233.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0233.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0233.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0233.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0233.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0233.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0233.wav",
    }
  },
      {
        "Name": "arctic_a0252",
        "TestID": "MUSHRANAT---arctic_a0252---BWC",
        "Text": "O'Brien had been a clean living young man with ideals.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0252.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0252.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0252.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0252.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0252.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0252.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0252.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0252.wav",
    }
  },
      {
        "Name": "arctic_a0268",
        "TestID": "MUSHRANAT---arctic_a0268---BWC",
        "Text": "Now go ahead and tell me in a straightforward way what has happened.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0268.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0268.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0268.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0268.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0268.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0268.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0268.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0268.wav",
    }
  },
      {
        "Name": "arctic_a0290",
        "TestID": "MUSHRANAT---arctic_a0290---BWC",
        "Text": "One by one the boys were captured.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0290.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0290.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0290.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0290.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0290.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0290.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0290.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0290.wav",
    }
  },
      {
        "Name": "arctic_a0296",
        "TestID": "MUSHRANAT---arctic_a0296---BWC",
        "Text": "Bassett was a fastidious man.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0296.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0296.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0296.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0296.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0296.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0296.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0296.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0296.wav",
    }
  },
      {
        "Name": "arctic_a0300",
        "TestID": "MUSHRANAT---arctic_a0300---BWC",
        "Text": "From my earliest recollection my sleep was a period of terror.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0300.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0300.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0300.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0300.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0300.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0300.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0300.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0300.wav",
    }
  },
      {
        "Name": "arctic_a0312",
        "TestID": "MUSHRANAT---arctic_a0312---BWC",
        "Text": "It lived in perpetual apprehension of that quarter of the compass.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0312.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0312.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0312.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0312.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0312.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0312.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0312.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0312.wav",
    }
  },
      {
        "Name": "arctic_a0354",
        "TestID": "MUSHRANAT---arctic_a0354---BWC",
        "Text": "Fresh meat they failed to obtain.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0354.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0354.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0354.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0354.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0354.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0354.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0354.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0354.wav",
    }
  },
      {
        "Name": "arctic_a0367",
        "TestID": "MUSHRANAT---arctic_a0367---BWC",
        "Text": "There is not an iota of truth in it, certainly not.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0367.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0367.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0367.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0367.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0367.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0367.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0367.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0367.wav",
    }
  },
      {
        "Name": "arctic_a0368",
        "TestID": "MUSHRANAT---arctic_a0368---BWC",
        "Text": "I just do appreciate it without being able to express my feelings.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0368.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0368.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0368.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0368.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0368.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0368.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0368.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0368.wav",
    }
  },
      {
        "Name": "arctic_a0372",
        "TestID": "MUSHRANAT---arctic_a0372---BWC",
        "Text": "He saw only the effect in a general, sketchy way.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0372.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0372.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0372.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0372.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0372.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0372.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0372.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0372.wav",
    }
  },
      {
        "Name": "arctic_a0374",
        "TestID": "MUSHRANAT---arctic_a0374---BWC",
        "Text": "But life's worth more than cash, she argued.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0374.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0374.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0374.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0374.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0374.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0374.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0374.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0374.wav",
    }
  },
      {
        "Name": "arctic_a0389",
        "TestID": "MUSHRANAT---arctic_a0389---BWC",
        "Text": "Mab, she said.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0389.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0389.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0389.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0389.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0389.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0389.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0389.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0389.wav",
    }
  },
      {
        "Name": "arctic_a0391",
        "TestID": "MUSHRANAT---arctic_a0391---BWC",
        "Text": "But he reconciled himself to it by an act of faith.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0391.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0391.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0391.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0391.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0391.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0391.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0391.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0391.wav",
    }
  },
      {
        "Name": "arctic_a0396",
        "TestID": "MUSHRANAT---arctic_a0396---BWC",
        "Text": "A rising tide of fat had submerged them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0396.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0396.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0396.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0396.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0396.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0396.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0396.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0396.wav",
    }
  },
      {
        "Name": "arctic_a0424",
        "TestID": "MUSHRANAT---arctic_a0424---BWC",
        "Text": "Obviously, it was a disease that could be contracted by contact.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0424.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0424.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0424.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0424.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0424.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0424.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0424.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0424.wav",
    }
  },
      {
        "Name": "arctic_a0436",
        "TestID": "MUSHRANAT---arctic_a0436---BWC",
        "Text": "But Martin smiled a superior smile.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0436.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0436.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0436.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0436.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0436.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0436.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0436.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0436.wav",
    }
  },
      {
        "Name": "arctic_a0463",
        "TestID": "MUSHRANAT---arctic_a0463---BWC",
        "Text": "They are his tongue, by which he makes his knowledge articulate.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0463.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0463.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0463.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0463.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0463.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0463.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0463.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0463.wav",
    }
  },
      {
        "Name": "arctic_a0521",
        "TestID": "MUSHRANAT---arctic_a0521---BWC",
        "Text": "Without them he could not run his empire.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0521.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0521.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0521.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0521.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0521.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0521.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0521.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0521.wav",
    }
  },
      {
        "Name": "arctic_a0543",
        "TestID": "MUSHRANAT---arctic_a0543---BWC",
        "Text": "I had been born with no organic, chemical predisposition toward alcohol.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0543.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0543.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0543.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0543.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0543.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0543.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0543.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_a0543.wav",
    }
  },
      {
        "Name": "arctic_a0551",
        "TestID": "MUSHRANAT---arctic_a0551---BWC",
        "Text": "All an appearance can know is mirage.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0551.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0551.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0551.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0551.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0551.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0551.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0551.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0551.wav",
    }
  },
      {
        "Name": "arctic_a0554",
        "TestID": "MUSHRANAT---arctic_a0554---BWC",
        "Text": "Jack London, Waikiki Beach, Honolulu, Oahu.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0554.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0554.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0554.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0554.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0554.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0554.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0554.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_a0554.wav",
    }
  },
      {
        "Name": "arctic_a0589",
        "TestID": "MUSHRANAT---arctic_a0589---BWC",
        "Text": "I was sick once, typhoid.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_a0589.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_a0589.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_a0589.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_a0589.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_a0589.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_a0589.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_a0589.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_a0589.wav",
    }
  },
      {
        "Name": "arctic_b0004",
        "TestID": "MUSHRANAT---arctic_b0004---BWC",
        "Text": "When I can't see beauty in woman I want to die.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0004.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0004.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0004.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0004.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0004.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0004.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0004.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_b0004.wav",
    }
  },
      {
        "Name": "arctic_b0025",
        "TestID": "MUSHRANAT---arctic_b0025---BWC",
        "Text": "Now, you understand.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0025.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0025.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0025.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0025.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0025.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0025.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0025.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0025.wav",
    }
  },
      {
        "Name": "arctic_b0029",
        "TestID": "MUSHRANAT---arctic_b0029---BWC",
        "Text": "All operations have been carried on from Montreal and Toronto.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0029.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0029.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0029.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0029.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0029.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0029.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0029.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0029.wav",
    }
  },
      {
        "Name": "arctic_b0031",
        "TestID": "MUSHRANAT---arctic_b0031---BWC",
        "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0031.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0031.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0031.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0031.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0031.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0031.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0031.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0031.wav",
    }
  },
      {
        "Name": "arctic_b0032",
        "TestID": "MUSHRANAT---arctic_b0032---BWC",
        "Text": "He caught himself with a jerk.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0032.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0032.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0032.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0032.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0032.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0032.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0032.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_b0032.wav",
    }
  },
      {
        "Name": "arctic_b0037",
        "TestID": "MUSHRANAT---arctic_b0037---BWC",
        "Text": "Philip knew that she was not an Indian.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0037.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0037.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0037.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0037.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0037.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0037.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0037.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0037.wav",
    }
  },
      {
        "Name": "arctic_b0038",
        "TestID": "MUSHRANAT---arctic_b0038---BWC",
        "Text": "In her haste to get away she had forgotten these things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0038.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0038.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0038.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0038.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0038.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0038.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0038.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0038.wav",
    }
  },
      {
        "Name": "arctic_b0048",
        "TestID": "MUSHRANAT---arctic_b0048---BWC",
        "Text": "He looked like one who had passed through an uncomfortable hour or two.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0048.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0048.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0048.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0048.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0048.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0048.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0048.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_b0048.wav",
    }
  },
      {
        "Name": "arctic_b0049",
        "TestID": "MUSHRANAT---arctic_b0049---BWC",
        "Text": "There was nothing more, except a large ink blot under the words.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0049.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0049.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0049.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0049.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0049.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0049.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0049.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0049.wav",
    }
  },
      {
        "Name": "arctic_b0066",
        "TestID": "MUSHRANAT---arctic_b0066---BWC",
        "Text": "If I meet her again I shall apologize, said Eileen.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0066.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0066.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0066.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0066.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0066.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0066.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0066.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_b0066.wav",
    }
  },
      {
        "Name": "arctic_b0087",
        "TestID": "MUSHRANAT---arctic_b0087---BWC",
        "Text": "They will search for us between their camp and Churchill.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0087.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0087.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0087.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0087.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0087.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0087.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0087.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0087.wav",
    }
  },
      {
        "Name": "arctic_b0095",
        "TestID": "MUSHRANAT---arctic_b0095---BWC",
        "Text": "He heard a sound which brought him quickly into consciousness of day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0095.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0095.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0095.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0095.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0095.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0095.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0095.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0095.wav",
    }
  },
      {
        "Name": "arctic_b0098",
        "TestID": "MUSHRANAT---arctic_b0098---BWC",
        "Text": "Philip looked back from the crest and saw Jeanne leaning over the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0098.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0098.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0098.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0098.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0098.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0098.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0098.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_b0098.wav",
    }
  },
      {
        "Name": "arctic_b0107",
        "TestID": "MUSHRANAT---arctic_b0107---BWC",
        "Text": "He was sure, now, of but few things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0107.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0107.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0107.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0107.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0107.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0107.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0107.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0107.wav",
    }
  },
      {
        "Name": "arctic_b0128",
        "TestID": "MUSHRANAT---arctic_b0128---BWC",
        "Text": "Philip bent low over Pierre.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0128.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0128.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0128.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0128.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0128.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0128.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0128.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0128.wav",
    }
  },
      {
        "Name": "arctic_b0140",
        "TestID": "MUSHRANAT---arctic_b0140---BWC",
        "Text": "They edged nearer, and stood shoulder to shoulder facing their world.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0140.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0140.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0140.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0140.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0140.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0140.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0140.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0140.wav",
    }
  },
      {
        "Name": "arctic_b0141",
        "TestID": "MUSHRANAT---arctic_b0141---BWC",
        "Text": "It was beating and waiting in the ambush of those black pits.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0141.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0141.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0141.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0141.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0141.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0141.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0141.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0141.wav",
    }
  },
      {
        "Name": "arctic_b0145",
        "TestID": "MUSHRANAT---arctic_b0145---BWC",
        "Text": "Besides, had he not whipped the big owl in the forest.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0145.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0145.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0145.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0145.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0145.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0145.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0145.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_b0145.wav",
    }
  },
      {
        "Name": "arctic_b0154",
        "TestID": "MUSHRANAT---arctic_b0154---BWC",
        "Text": "That is the strange part of it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0154.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0154.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_b0154.wav",
    }
  },
      {
        "Name": "arctic_b0223",
        "TestID": "MUSHRANAT---arctic_b0223---BWC",
        "Text": "They likewise are disinclined to being eaten.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0223.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0223.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0223.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0223.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0223.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0223.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0223.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0223.wav",
    }
  },
      {
        "Name": "arctic_b0238",
        "TestID": "MUSHRANAT---arctic_b0238---BWC",
        "Text": "The very thought of the effort to swim over was nauseating.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0238.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0238.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0238.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0238.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0238.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0238.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0238.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_b0238.wav",
    }
  },
      {
        "Name": "arctic_b0299",
        "TestID": "MUSHRANAT---arctic_b0299---BWC",
        "Text": "Miss Brodie's smile was slightly sarcastic.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0299.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0299.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0299.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0299.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0299.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0299.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0299.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0299.wav",
    }
  },
      {
        "Name": "arctic_b0343",
        "TestID": "MUSHRANAT---arctic_b0343---BWC",
        "Text": "But how are you going to do it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0343.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0343.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0343.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0343.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0343.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0343.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0343.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0343.wav",
    }
  },
      {
        "Name": "arctic_b0344",
        "TestID": "MUSHRANAT---arctic_b0344---BWC",
        "Text": "Lots of men take women buggy riding.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0344.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0344.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0344.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0344.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0344.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0344.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0344.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0344.wav",
    }
  },
      {
        "Name": "arctic_b0346",
        "TestID": "MUSHRANAT---arctic_b0346---BWC",
        "Text": "There's not an iota of truth in it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0346.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0346.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0346.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0346.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0346.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0346.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0346.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0346.wav",
    }
  },
      {
        "Name": "arctic_b0353",
        "TestID": "MUSHRANAT---arctic_b0353---BWC",
        "Text": "I want to know how all this is possible.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0353.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0353.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0353.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0353.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0353.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0353.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0353.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0353.wav",
    }
  },
      {
        "Name": "arctic_b0375",
        "TestID": "MUSHRANAT---arctic_b0375---BWC",
        "Text": "Man could not conquer them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0375.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0375.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0375.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0375.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0375.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0375.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0375.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_b0375.wav",
    }
  },
      {
        "Name": "arctic_b0383",
        "TestID": "MUSHRANAT---arctic_b0383---BWC",
        "Text": "A bush chief had died a natural death.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0383.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0383.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0383.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0383.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0383.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0383.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0383.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0383.wav",
    }
  },
      {
        "Name": "arctic_b0407",
        "TestID": "MUSHRANAT---arctic_b0407---BWC",
        "Text": "Of course much grumbling went on, and little outbursts were continually occurring.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0407.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0407.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0407.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0407.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0407.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0407.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0407.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0407.wav",
    }
  },
      {
        "Name": "arctic_b0419",
        "TestID": "MUSHRANAT---arctic_b0419---BWC",
        "Text": "Your father's fifth command, he nodded.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0419.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0419.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0419.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0419.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0419.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0419.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0419.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0419.wav",
    }
  },
      {
        "Name": "arctic_b0421",
        "TestID": "MUSHRANAT---arctic_b0421---BWC",
        "Text": "She is essentially the life-giving, life-conserving female of the species.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0421.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0421.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0421.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0421.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0421.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0421.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0421.wav",
      "ours---2": "./audio/20240815_spaccent/ours_BWC/arctic_b0421.wav",
    }
  },
      {
        "Name": "arctic_b0434",
        "TestID": "MUSHRANAT---arctic_b0434---BWC",
        "Text": "The steward has just tendered me a respectful bit of advice.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0434.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0434.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0434.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0434.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0434.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0434.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0434.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_b0434.wav",
    }
  },
      {
        "Name": "arctic_b0439",
        "TestID": "MUSHRANAT---arctic_b0439---BWC",
        "Text": "The land exchanged its austere robes for the garb of a smiling wanton.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0439.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0439.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0439.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0439.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0439.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0439.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0439.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0439.wav",
    }
  },
      {
        "Name": "arctic_b0441",
        "TestID": "MUSHRANAT---arctic_b0441---BWC",
        "Text": "And there was Ethel Baird, whom also you must remember.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0441.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0441.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0441.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0441.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0441.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0441.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0441.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_BWC/arctic_b0441.wav",
    }
  },
      {
        "Name": "arctic_b0450",
        "TestID": "MUSHRANAT---arctic_b0450---BWC",
        "Text": "To my dearest and always appreciated friend, I submit myself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0450.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0450.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0450.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0450.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0450.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0450.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0450.wav",
      "source---2": "./audio/20240815_spaccent/source_BWC/arctic_b0450.wav",
    }
  },
      {
        "Name": "arctic_b0487",
        "TestID": "MUSHRANAT---arctic_b0487---BWC",
        "Text": "After all superfluous flesh is gone what is left is stringy and resistant.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0487.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0487.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0487.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0487.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0487.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0487.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0487.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_BWC/arctic_b0487.wav",
    }
  },
      {
        "Name": "arctic_b0490",
        "TestID": "MUSHRANAT---arctic_b0490---BWC",
        "Text": "What an excited whispering and conferring took place.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0490.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0490.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0490.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0490.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0490.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0490.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0490.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0490.wav",
    }
  },
      {
        "Name": "arctic_b0503",
        "TestID": "MUSHRANAT---arctic_b0503---BWC",
        "Text": "The scents of strange vegetation blew off the tropic land.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0503.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0503.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0503.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0503.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0503.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0503.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0503.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0503.wav",
    }
  },
      {
        "Name": "arctic_b0515",
        "TestID": "MUSHRANAT---arctic_b0515---BWC",
        "Text": "But already he had composed himself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_BWC/arctic_b0515.wav",
      "resynth": "./audio/20240815_spaccent/resynth_BWC/arctic_b0515.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_BWC/arctic_b0515.wav",
      "ours": "./audio/20240815_spaccent/ours_BWC/arctic_b0515.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_BWC/arctic_b0515.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0515.wav",
      "baseline": "./audio/20240815_spaccent/baseline_BWC/arctic_b0515.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_BWC/arctic_b0515.wav",
    }
  },
      {
        "Name": "arctic_a0017",
        "TestID": "MUSHRANAT---arctic_a0017---LXC",
        "Text": "From that moment his friendship for Belize turns to hatred and jealousy.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0017.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0017.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0017.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0017.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0017.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0017.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0017.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0017.wav",
    }
  },
      {
        "Name": "arctic_a0026",
        "TestID": "MUSHRANAT---arctic_a0026---LXC",
        "Text": "It occurred to me that there would have to be an accounting.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0026.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0026.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0026.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0026.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0026.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0026.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0026.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0026.wav",
    }
  },
      {
        "Name": "arctic_a0045",
        "TestID": "MUSHRANAT---arctic_a0045---LXC",
        "Text": "He moved away as quietly as he had come.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0045.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0045.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0045.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0045.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0045.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0045.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0045.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_a0045.wav",
    }
  },
      {
        "Name": "arctic_a0046",
        "TestID": "MUSHRANAT---arctic_a0046---LXC",
        "Text": "The girl faced him, her eyes shining with sudden fear.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0046.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0046.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0046.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0046.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0046.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0046.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0046.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0046.wav",
    }
  },
      {
        "Name": "arctic_a0053",
        "TestID": "MUSHRANAT---arctic_a0053---LXC",
        "Text": "Suddenly his fingers closed tightly over the handkerchief.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0053.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0053.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0053.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0053.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0053.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0053.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0053.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0053.wav",
    }
  },
      {
        "Name": "arctic_a0059",
        "TestID": "MUSHRANAT---arctic_a0059---LXC",
        "Text": "His immaculate appearance was gone.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0059.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0059.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0059.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0059.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0059.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0059.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0059.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0059.wav",
    }
  },
      {
        "Name": "arctic_a0065",
        "TestID": "MUSHRANAT---arctic_a0065---LXC",
        "Text": "They closed now until his fingers were like cords of steel.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0065.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0065.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0065.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0065.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0065.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0065.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0065.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0065.wav",
    }
  },
      {
        "Name": "arctic_a0069",
        "TestID": "MUSHRANAT---arctic_a0069---LXC",
        "Text": "It was his intention to return to Eileen and her father.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0069.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0069.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0069.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0069.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0069.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0069.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0069.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0069.wav",
    }
  },
      {
        "Name": "arctic_a0084",
        "TestID": "MUSHRANAT---arctic_a0084---LXC",
        "Text": "Scarcely had he uttered the name when Pierre's closing eyes shot open.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0084.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0084.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0084.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0084.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0084.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0084.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0084.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0084.wav",
    }
  },
      {
        "Name": "arctic_a0088",
        "TestID": "MUSHRANAT---arctic_a0088---LXC",
        "Text": "He made sure that the magazine was loaded, and resumed his paddling.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0088.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0088.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0088.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0088.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0088.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0088.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0088.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_a0088.wav",
    }
  },
      {
        "Name": "arctic_a0103",
        "TestID": "MUSHRANAT---arctic_a0103---LXC",
        "Text": "But there came no promise from the bow of the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0103.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0103.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0103.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0103.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0103.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0103.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0103.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0103.wav",
    }
  },
      {
        "Name": "arctic_a0109",
        "TestID": "MUSHRANAT---arctic_a0109---LXC",
        "Text": "Do you know that you are shaking my confidence in you.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0109.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0109.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0109.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0109.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0109.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0109.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0109.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0109.wav",
    }
  },
      {
        "Name": "arctic_a0154",
        "TestID": "MUSHRANAT---arctic_a0154---LXC",
        "Text": "He was smooth-shaven, and his hair and eyes were black.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0154.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0154.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0154.wav",
    }
  },
      {
        "Name": "arctic_a0175",
        "TestID": "MUSHRANAT---arctic_a0175---LXC",
        "Text": "Down there the earth was already swelling with life.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0175.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0175.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0175.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0175.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0175.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0175.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0175.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0175.wav",
    }
  },
      {
        "Name": "arctic_a0199",
        "TestID": "MUSHRANAT---arctic_a0199---LXC",
        "Text": "Thus had the raw wilderness prepared him for this day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0199.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0199.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0199.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0199.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0199.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0199.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0199.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0199.wav",
    }
  },
      {
        "Name": "arctic_a0209",
        "TestID": "MUSHRANAT---arctic_a0209---LXC",
        "Text": "It was not a large lake, and almost round.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0209.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0209.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0209.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0209.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0209.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0209.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0209.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_a0209.wav",
    }
  },
      {
        "Name": "arctic_a0216",
        "TestID": "MUSHRANAT---arctic_a0216---LXC",
        "Text": "The other felt a sudden wave of irritation rush through him.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0216.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0216.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0216.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0216.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0216.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0216.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0216.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0216.wav",
    }
  },
      {
        "Name": "arctic_a0225",
        "TestID": "MUSHRANAT---arctic_a0225---LXC",
        "Text": "I was brought up the way most girls in Hawaii are brought up.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0225.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0225.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0225.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0225.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0225.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0225.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0225.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0225.wav",
    }
  },
      {
        "Name": "arctic_a0233",
        "TestID": "MUSHRANAT---arctic_a0233---LXC",
        "Text": "I never allow what can't be changed to annoy me.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0233.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0233.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0233.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0233.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0233.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0233.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0233.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0233.wav",
    }
  },
      {
        "Name": "arctic_a0252",
        "TestID": "MUSHRANAT---arctic_a0252---LXC",
        "Text": "O'Brien had been a clean living young man with ideals.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0252.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0252.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0252.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0252.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0252.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0252.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0252.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0252.wav",
    }
  },
      {
        "Name": "arctic_a0268",
        "TestID": "MUSHRANAT---arctic_a0268---LXC",
        "Text": "Now go ahead and tell me in a straightforward way what has happened.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0268.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0268.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0268.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0268.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0268.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0268.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0268.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0268.wav",
    }
  },
      {
        "Name": "arctic_a0290",
        "TestID": "MUSHRANAT---arctic_a0290---LXC",
        "Text": "One by one the boys were captured.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0290.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0290.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0290.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0290.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0290.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0290.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0290.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0290.wav",
    }
  },
      {
        "Name": "arctic_a0296",
        "TestID": "MUSHRANAT---arctic_a0296---LXC",
        "Text": "Bassett was a fastidious man.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0296.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0296.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0296.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0296.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0296.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0296.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0296.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0296.wav",
    }
  },
      {
        "Name": "arctic_a0300",
        "TestID": "MUSHRANAT---arctic_a0300---LXC",
        "Text": "From my earliest recollection my sleep was a period of terror.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0300.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0300.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0300.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0300.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0300.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0300.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0300.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0300.wav",
    }
  },
      {
        "Name": "arctic_a0312",
        "TestID": "MUSHRANAT---arctic_a0312---LXC",
        "Text": "It lived in perpetual apprehension of that quarter of the compass.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0312.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0312.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0312.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0312.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0312.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0312.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0312.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0312.wav",
    }
  },
      {
        "Name": "arctic_a0354",
        "TestID": "MUSHRANAT---arctic_a0354---LXC",
        "Text": "Fresh meat they failed to obtain.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0354.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0354.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0354.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0354.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0354.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0354.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0354.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0354.wav",
    }
  },
      {
        "Name": "arctic_a0367",
        "TestID": "MUSHRANAT---arctic_a0367---LXC",
        "Text": "There is not an iota of truth in it, certainly not.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0367.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0367.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0367.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0367.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0367.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0367.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0367.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0367.wav",
    }
  },
      {
        "Name": "arctic_a0368",
        "TestID": "MUSHRANAT---arctic_a0368---LXC",
        "Text": "I just do appreciate it without being able to express my feelings.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0368.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0368.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0368.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0368.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0368.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0368.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0368.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0368.wav",
    }
  },
      {
        "Name": "arctic_a0372",
        "TestID": "MUSHRANAT---arctic_a0372---LXC",
        "Text": "He saw only the effect in a general, sketchy way.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0372.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0372.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0372.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0372.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0372.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0372.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0372.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0372.wav",
    }
  },
      {
        "Name": "arctic_a0374",
        "TestID": "MUSHRANAT---arctic_a0374---LXC",
        "Text": "But life's worth more than cash, she argued.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0374.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0374.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0374.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0374.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0374.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0374.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0374.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0374.wav",
    }
  },
      {
        "Name": "arctic_a0389",
        "TestID": "MUSHRANAT---arctic_a0389---LXC",
        "Text": "Mab, she said.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0389.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0389.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0389.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0389.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0389.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0389.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0389.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0389.wav",
    }
  },
      {
        "Name": "arctic_a0391",
        "TestID": "MUSHRANAT---arctic_a0391---LXC",
        "Text": "But he reconciled himself to it by an act of faith.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0391.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0391.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0391.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0391.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0391.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0391.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0391.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0391.wav",
    }
  },
      {
        "Name": "arctic_a0396",
        "TestID": "MUSHRANAT---arctic_a0396---LXC",
        "Text": "A rising tide of fat had submerged them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0396.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0396.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0396.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0396.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0396.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0396.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0396.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0396.wav",
    }
  },
      {
        "Name": "arctic_a0424",
        "TestID": "MUSHRANAT---arctic_a0424---LXC",
        "Text": "Obviously, it was a disease that could be contracted by contact.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0424.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0424.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0424.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0424.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0424.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0424.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0424.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0424.wav",
    }
  },
      {
        "Name": "arctic_a0436",
        "TestID": "MUSHRANAT---arctic_a0436---LXC",
        "Text": "But Martin smiled a superior smile.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0436.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0436.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0436.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0436.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0436.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0436.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0436.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0436.wav",
    }
  },
      {
        "Name": "arctic_a0463",
        "TestID": "MUSHRANAT---arctic_a0463---LXC",
        "Text": "They are his tongue, by which he makes his knowledge articulate.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0463.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0463.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0463.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0463.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0463.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0463.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0463.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0463.wav",
    }
  },
      {
        "Name": "arctic_a0521",
        "TestID": "MUSHRANAT---arctic_a0521---LXC",
        "Text": "Without them he could not run his empire.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0521.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0521.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0521.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0521.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0521.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0521.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0521.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0521.wav",
    }
  },
      {
        "Name": "arctic_a0543",
        "TestID": "MUSHRANAT---arctic_a0543---LXC",
        "Text": "I had been born with no organic, chemical predisposition toward alcohol.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0543.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0543.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0543.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0543.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0543.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0543.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0543.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_a0543.wav",
    }
  },
      {
        "Name": "arctic_a0551",
        "TestID": "MUSHRANAT---arctic_a0551---LXC",
        "Text": "All an appearance can know is mirage.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0551.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0551.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0551.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0551.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0551.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0551.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0551.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0551.wav",
    }
  },
      {
        "Name": "arctic_a0554",
        "TestID": "MUSHRANAT---arctic_a0554---LXC",
        "Text": "Jack London, Waikiki Beach, Honolulu, Oahu.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0554.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0554.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0554.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0554.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0554.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0554.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0554.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_a0554.wav",
    }
  },
      {
        "Name": "arctic_a0589",
        "TestID": "MUSHRANAT---arctic_a0589---LXC",
        "Text": "I was sick once, typhoid.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_a0589.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_a0589.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_a0589.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_a0589.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_a0589.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_a0589.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_a0589.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_a0589.wav",
    }
  },
      {
        "Name": "arctic_b0004",
        "TestID": "MUSHRANAT---arctic_b0004---LXC",
        "Text": "When I can't see beauty in woman I want to die.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0004.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0004.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0004.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0004.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0004.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0004.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0004.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_b0004.wav",
    }
  },
      {
        "Name": "arctic_b0025",
        "TestID": "MUSHRANAT---arctic_b0025---LXC",
        "Text": "Now, you understand.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0025.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0025.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0025.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0025.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0025.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0025.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0025.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0025.wav",
    }
  },
      {
        "Name": "arctic_b0029",
        "TestID": "MUSHRANAT---arctic_b0029---LXC",
        "Text": "All operations have been carried on from Montreal and Toronto.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0029.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0029.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0029.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0029.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0029.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0029.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0029.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0029.wav",
    }
  },
      {
        "Name": "arctic_b0031",
        "TestID": "MUSHRANAT---arctic_b0031---LXC",
        "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0031.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0031.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0031.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0031.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0031.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0031.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0031.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0031.wav",
    }
  },
      {
        "Name": "arctic_b0032",
        "TestID": "MUSHRANAT---arctic_b0032---LXC",
        "Text": "He caught himself with a jerk.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0032.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0032.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0032.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0032.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0032.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0032.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0032.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_b0032.wav",
    }
  },
      {
        "Name": "arctic_b0037",
        "TestID": "MUSHRANAT---arctic_b0037---LXC",
        "Text": "Philip knew that she was not an Indian.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0037.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0037.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0037.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0037.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0037.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0037.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0037.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0037.wav",
    }
  },
      {
        "Name": "arctic_b0038",
        "TestID": "MUSHRANAT---arctic_b0038---LXC",
        "Text": "In her haste to get away she had forgotten these things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0038.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0038.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0038.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0038.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0038.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0038.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0038.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0038.wav",
    }
  },
      {
        "Name": "arctic_b0048",
        "TestID": "MUSHRANAT---arctic_b0048---LXC",
        "Text": "He looked like one who had passed through an uncomfortable hour or two.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0048.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0048.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0048.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0048.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0048.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0048.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0048.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_b0048.wav",
    }
  },
      {
        "Name": "arctic_b0049",
        "TestID": "MUSHRANAT---arctic_b0049---LXC",
        "Text": "There was nothing more, except a large ink blot under the words.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0049.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0049.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0049.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0049.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0049.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0049.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0049.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0049.wav",
    }
  },
      {
        "Name": "arctic_b0066",
        "TestID": "MUSHRANAT---arctic_b0066---LXC",
        "Text": "If I meet her again I shall apologize, said Eileen.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0066.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0066.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0066.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0066.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0066.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0066.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0066.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_b0066.wav",
    }
  },
      {
        "Name": "arctic_b0087",
        "TestID": "MUSHRANAT---arctic_b0087---LXC",
        "Text": "They will search for us between their camp and Churchill.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0087.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0087.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0087.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0087.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0087.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0087.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0087.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0087.wav",
    }
  },
      {
        "Name": "arctic_b0095",
        "TestID": "MUSHRANAT---arctic_b0095---LXC",
        "Text": "He heard a sound which brought him quickly into consciousness of day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0095.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0095.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0095.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0095.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0095.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0095.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0095.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0095.wav",
    }
  },
      {
        "Name": "arctic_b0098",
        "TestID": "MUSHRANAT---arctic_b0098---LXC",
        "Text": "Philip looked back from the crest and saw Jeanne leaning over the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0098.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0098.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0098.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0098.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0098.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0098.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0098.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_b0098.wav",
    }
  },
      {
        "Name": "arctic_b0107",
        "TestID": "MUSHRANAT---arctic_b0107---LXC",
        "Text": "He was sure, now, of but few things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0107.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0107.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0107.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0107.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0107.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0107.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0107.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0107.wav",
    }
  },
      {
        "Name": "arctic_b0128",
        "TestID": "MUSHRANAT---arctic_b0128---LXC",
        "Text": "Philip bent low over Pierre.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0128.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0128.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0128.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0128.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0128.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0128.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0128.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0128.wav",
    }
  },
      {
        "Name": "arctic_b0140",
        "TestID": "MUSHRANAT---arctic_b0140---LXC",
        "Text": "They edged nearer, and stood shoulder to shoulder facing their world.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0140.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0140.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0140.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0140.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0140.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0140.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0140.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0140.wav",
    }
  },
      {
        "Name": "arctic_b0141",
        "TestID": "MUSHRANAT---arctic_b0141---LXC",
        "Text": "It was beating and waiting in the ambush of those black pits.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0141.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0141.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0141.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0141.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0141.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0141.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0141.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0141.wav",
    }
  },
      {
        "Name": "arctic_b0145",
        "TestID": "MUSHRANAT---arctic_b0145---LXC",
        "Text": "Besides, had he not whipped the big owl in the forest.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0145.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0145.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0145.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0145.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0145.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0145.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0145.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_b0145.wav",
    }
  },
      {
        "Name": "arctic_b0154",
        "TestID": "MUSHRANAT---arctic_b0154---LXC",
        "Text": "That is the strange part of it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0154.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0154.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_b0154.wav",
    }
  },
      {
        "Name": "arctic_b0223",
        "TestID": "MUSHRANAT---arctic_b0223---LXC",
        "Text": "They likewise are disinclined to being eaten.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0223.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0223.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0223.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0223.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0223.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0223.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0223.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0223.wav",
    }
  },
      {
        "Name": "arctic_b0238",
        "TestID": "MUSHRANAT---arctic_b0238---LXC",
        "Text": "The very thought of the effort to swim over was nauseating.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0238.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0238.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0238.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0238.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0238.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0238.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0238.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_b0238.wav",
    }
  },
      {
        "Name": "arctic_b0299",
        "TestID": "MUSHRANAT---arctic_b0299---LXC",
        "Text": "Miss Brodie's smile was slightly sarcastic.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0299.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0299.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0299.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0299.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0299.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0299.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0299.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0299.wav",
    }
  },
      {
        "Name": "arctic_b0343",
        "TestID": "MUSHRANAT---arctic_b0343---LXC",
        "Text": "But how are you going to do it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0343.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0343.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0343.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0343.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0343.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0343.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0343.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0343.wav",
    }
  },
      {
        "Name": "arctic_b0344",
        "TestID": "MUSHRANAT---arctic_b0344---LXC",
        "Text": "Lots of men take women buggy riding.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0344.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0344.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0344.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0344.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0344.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0344.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0344.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0344.wav",
    }
  },
      {
        "Name": "arctic_b0346",
        "TestID": "MUSHRANAT---arctic_b0346---LXC",
        "Text": "There's not an iota of truth in it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0346.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0346.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0346.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0346.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0346.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0346.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0346.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0346.wav",
    }
  },
      {
        "Name": "arctic_b0353",
        "TestID": "MUSHRANAT---arctic_b0353---LXC",
        "Text": "I want to know how all this is possible.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0353.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0353.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0353.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0353.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0353.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0353.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0353.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0353.wav",
    }
  },
      {
        "Name": "arctic_b0375",
        "TestID": "MUSHRANAT---arctic_b0375---LXC",
        "Text": "Man could not conquer them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0375.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0375.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0375.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0375.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0375.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0375.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0375.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_b0375.wav",
    }
  },
      {
        "Name": "arctic_b0383",
        "TestID": "MUSHRANAT---arctic_b0383---LXC",
        "Text": "A bush chief had died a natural death.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0383.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0383.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0383.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0383.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0383.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0383.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0383.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0383.wav",
    }
  },
      {
        "Name": "arctic_b0407",
        "TestID": "MUSHRANAT---arctic_b0407---LXC",
        "Text": "Of course much grumbling went on, and little outbursts were continually occurring.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0407.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0407.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0407.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0407.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0407.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0407.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0407.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0407.wav",
    }
  },
      {
        "Name": "arctic_b0419",
        "TestID": "MUSHRANAT---arctic_b0419---LXC",
        "Text": "Your father's fifth command, he nodded.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0419.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0419.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0419.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0419.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0419.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0419.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0419.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0419.wav",
    }
  },
      {
        "Name": "arctic_b0421",
        "TestID": "MUSHRANAT---arctic_b0421---LXC",
        "Text": "She is essentially the life-giving, life-conserving female of the species.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0421.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0421.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0421.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0421.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0421.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0421.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0421.wav",
      "ours---2": "./audio/20240815_spaccent/ours_LXC/arctic_b0421.wav",
    }
  },
      {
        "Name": "arctic_b0434",
        "TestID": "MUSHRANAT---arctic_b0434---LXC",
        "Text": "The steward has just tendered me a respectful bit of advice.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0434.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0434.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0434.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0434.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0434.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0434.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0434.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_b0434.wav",
    }
  },
      {
        "Name": "arctic_b0439",
        "TestID": "MUSHRANAT---arctic_b0439---LXC",
        "Text": "The land exchanged its austere robes for the garb of a smiling wanton.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0439.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0439.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0439.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0439.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0439.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0439.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0439.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0439.wav",
    }
  },
      {
        "Name": "arctic_b0441",
        "TestID": "MUSHRANAT---arctic_b0441---LXC",
        "Text": "And there was Ethel Baird, whom also you must remember.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0441.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0441.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0441.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0441.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0441.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0441.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0441.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_LXC/arctic_b0441.wav",
    }
  },
      {
        "Name": "arctic_b0450",
        "TestID": "MUSHRANAT---arctic_b0450---LXC",
        "Text": "To my dearest and always appreciated friend, I submit myself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0450.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0450.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0450.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0450.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0450.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0450.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0450.wav",
      "source---2": "./audio/20240815_spaccent/source_LXC/arctic_b0450.wav",
    }
  },
      {
        "Name": "arctic_b0487",
        "TestID": "MUSHRANAT---arctic_b0487---LXC",
        "Text": "After all superfluous flesh is gone what is left is stringy and resistant.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0487.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0487.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0487.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0487.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0487.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0487.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0487.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_LXC/arctic_b0487.wav",
    }
  },
      {
        "Name": "arctic_b0490",
        "TestID": "MUSHRANAT---arctic_b0490---LXC",
        "Text": "What an excited whispering and conferring took place.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0490.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0490.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0490.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0490.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0490.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0490.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0490.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0490.wav",
    }
  },
      {
        "Name": "arctic_b0503",
        "TestID": "MUSHRANAT---arctic_b0503---LXC",
        "Text": "The scents of strange vegetation blew off the tropic land.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0503.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0503.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0503.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0503.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0503.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0503.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0503.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0503.wav",
    }
  },
      {
        "Name": "arctic_b0515",
        "TestID": "MUSHRANAT---arctic_b0515---LXC",
        "Text": "But already he had composed himself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_LXC/arctic_b0515.wav",
      "resynth": "./audio/20240815_spaccent/resynth_LXC/arctic_b0515.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_LXC/arctic_b0515.wav",
      "ours": "./audio/20240815_spaccent/ours_LXC/arctic_b0515.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_LXC/arctic_b0515.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0515.wav",
      "baseline": "./audio/20240815_spaccent/baseline_LXC/arctic_b0515.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_LXC/arctic_b0515.wav",
    }
  },
      {
        "Name": "arctic_a0017",
        "TestID": "MUSHRANAT---arctic_a0017---NCC",
        "Text": "From that moment his friendship for Belize turns to hatred and jealousy.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0017.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0017.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0017.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0017.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0017.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0017.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0017.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0017.wav",
    }
  },
      {
        "Name": "arctic_a0026",
        "TestID": "MUSHRANAT---arctic_a0026---NCC",
        "Text": "It occurred to me that there would have to be an accounting.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0026.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0026.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0026.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0026.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0026.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0026.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0026.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0026.wav",
    }
  },
      {
        "Name": "arctic_a0045",
        "TestID": "MUSHRANAT---arctic_a0045---NCC",
        "Text": "He moved away as quietly as he had come.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0045.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0045.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0045.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0045.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0045.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0045.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0045.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_a0045.wav",
    }
  },
      {
        "Name": "arctic_a0046",
        "TestID": "MUSHRANAT---arctic_a0046---NCC",
        "Text": "The girl faced him, her eyes shining with sudden fear.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0046.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0046.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0046.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0046.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0046.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0046.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0046.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0046.wav",
    }
  },
      {
        "Name": "arctic_a0053",
        "TestID": "MUSHRANAT---arctic_a0053---NCC",
        "Text": "Suddenly his fingers closed tightly over the handkerchief.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0053.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0053.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0053.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0053.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0053.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0053.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0053.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0053.wav",
    }
  },
      {
        "Name": "arctic_a0059",
        "TestID": "MUSHRANAT---arctic_a0059---NCC",
        "Text": "His immaculate appearance was gone.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0059.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0059.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0059.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0059.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0059.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0059.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0059.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0059.wav",
    }
  },
      {
        "Name": "arctic_a0065",
        "TestID": "MUSHRANAT---arctic_a0065---NCC",
        "Text": "They closed now until his fingers were like cords of steel.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0065.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0065.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0065.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0065.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0065.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0065.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0065.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0065.wav",
    }
  },
      {
        "Name": "arctic_a0069",
        "TestID": "MUSHRANAT---arctic_a0069---NCC",
        "Text": "It was his intention to return to Eileen and her father.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0069.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0069.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0069.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0069.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0069.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0069.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0069.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0069.wav",
    }
  },
      {
        "Name": "arctic_a0084",
        "TestID": "MUSHRANAT---arctic_a0084---NCC",
        "Text": "Scarcely had he uttered the name when Pierre's closing eyes shot open.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0084.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0084.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0084.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0084.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0084.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0084.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0084.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0084.wav",
    }
  },
      {
        "Name": "arctic_a0088",
        "TestID": "MUSHRANAT---arctic_a0088---NCC",
        "Text": "He made sure that the magazine was loaded, and resumed his paddling.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0088.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0088.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0088.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0088.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0088.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0088.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0088.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_a0088.wav",
    }
  },
      {
        "Name": "arctic_a0103",
        "TestID": "MUSHRANAT---arctic_a0103---NCC",
        "Text": "But there came no promise from the bow of the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0103.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0103.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0103.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0103.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0103.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0103.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0103.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0103.wav",
    }
  },
      {
        "Name": "arctic_a0109",
        "TestID": "MUSHRANAT---arctic_a0109---NCC",
        "Text": "Do you know that you are shaking my confidence in you.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0109.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0109.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0109.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0109.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0109.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0109.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0109.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0109.wav",
    }
  },
      {
        "Name": "arctic_a0154",
        "TestID": "MUSHRANAT---arctic_a0154---NCC",
        "Text": "He was smooth-shaven, and his hair and eyes were black.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0154.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0154.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0154.wav",
    }
  },
      {
        "Name": "arctic_a0175",
        "TestID": "MUSHRANAT---arctic_a0175---NCC",
        "Text": "Down there the earth was already swelling with life.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0175.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0175.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0175.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0175.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0175.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0175.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0175.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0175.wav",
    }
  },
      {
        "Name": "arctic_a0199",
        "TestID": "MUSHRANAT---arctic_a0199---NCC",
        "Text": "Thus had the raw wilderness prepared him for this day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0199.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0199.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0199.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0199.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0199.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0199.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0199.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0199.wav",
    }
  },
      {
        "Name": "arctic_a0209",
        "TestID": "MUSHRANAT---arctic_a0209---NCC",
        "Text": "It was not a large lake, and almost round.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0209.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0209.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0209.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0209.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0209.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0209.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0209.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_a0209.wav",
    }
  },
      {
        "Name": "arctic_a0216",
        "TestID": "MUSHRANAT---arctic_a0216---NCC",
        "Text": "The other felt a sudden wave of irritation rush through him.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0216.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0216.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0216.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0216.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0216.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0216.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0216.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0216.wav",
    }
  },
      {
        "Name": "arctic_a0225",
        "TestID": "MUSHRANAT---arctic_a0225---NCC",
        "Text": "I was brought up the way most girls in Hawaii are brought up.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0225.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0225.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0225.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0225.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0225.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0225.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0225.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0225.wav",
    }
  },
      {
        "Name": "arctic_a0233",
        "TestID": "MUSHRANAT---arctic_a0233---NCC",
        "Text": "I never allow what can't be changed to annoy me.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0233.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0233.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0233.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0233.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0233.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0233.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0233.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0233.wav",
    }
  },
      {
        "Name": "arctic_a0252",
        "TestID": "MUSHRANAT---arctic_a0252---NCC",
        "Text": "O'Brien had been a clean living young man with ideals.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0252.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0252.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0252.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0252.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0252.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0252.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0252.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0252.wav",
    }
  },
      {
        "Name": "arctic_a0268",
        "TestID": "MUSHRANAT---arctic_a0268---NCC",
        "Text": "Now go ahead and tell me in a straightforward way what has happened.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0268.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0268.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0268.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0268.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0268.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0268.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0268.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0268.wav",
    }
  },
      {
        "Name": "arctic_a0290",
        "TestID": "MUSHRANAT---arctic_a0290---NCC",
        "Text": "One by one the boys were captured.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0290.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0290.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0290.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0290.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0290.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0290.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0290.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0290.wav",
    }
  },
      {
        "Name": "arctic_a0296",
        "TestID": "MUSHRANAT---arctic_a0296---NCC",
        "Text": "Bassett was a fastidious man.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0296.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0296.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0296.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0296.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0296.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0296.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0296.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0296.wav",
    }
  },
      {
        "Name": "arctic_a0300",
        "TestID": "MUSHRANAT---arctic_a0300---NCC",
        "Text": "From my earliest recollection my sleep was a period of terror.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0300.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0300.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0300.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0300.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0300.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0300.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0300.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0300.wav",
    }
  },
      {
        "Name": "arctic_a0312",
        "TestID": "MUSHRANAT---arctic_a0312---NCC",
        "Text": "It lived in perpetual apprehension of that quarter of the compass.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0312.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0312.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0312.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0312.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0312.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0312.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0312.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0312.wav",
    }
  },
      {
        "Name": "arctic_a0354",
        "TestID": "MUSHRANAT---arctic_a0354---NCC",
        "Text": "Fresh meat they failed to obtain.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0354.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0354.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0354.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0354.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0354.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0354.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0354.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0354.wav",
    }
  },
      {
        "Name": "arctic_a0367",
        "TestID": "MUSHRANAT---arctic_a0367---NCC",
        "Text": "There is not an iota of truth in it, certainly not.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0367.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0367.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0367.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0367.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0367.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0367.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0367.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0367.wav",
    }
  },
      {
        "Name": "arctic_a0368",
        "TestID": "MUSHRANAT---arctic_a0368---NCC",
        "Text": "I just do appreciate it without being able to express my feelings.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0368.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0368.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0368.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0368.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0368.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0368.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0368.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0368.wav",
    }
  },
      {
        "Name": "arctic_a0372",
        "TestID": "MUSHRANAT---arctic_a0372---NCC",
        "Text": "He saw only the effect in a general, sketchy way.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0372.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0372.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0372.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0372.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0372.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0372.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0372.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0372.wav",
    }
  },
      {
        "Name": "arctic_a0374",
        "TestID": "MUSHRANAT---arctic_a0374---NCC",
        "Text": "But life's worth more than cash, she argued.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0374.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0374.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0374.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0374.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0374.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0374.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0374.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0374.wav",
    }
  },
      {
        "Name": "arctic_a0389",
        "TestID": "MUSHRANAT---arctic_a0389---NCC",
        "Text": "Mab, she said.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0389.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0389.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0389.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0389.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0389.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0389.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0389.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0389.wav",
    }
  },
      {
        "Name": "arctic_a0391",
        "TestID": "MUSHRANAT---arctic_a0391---NCC",
        "Text": "But he reconciled himself to it by an act of faith.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0391.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0391.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0391.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0391.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0391.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0391.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0391.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0391.wav",
    }
  },
      {
        "Name": "arctic_a0396",
        "TestID": "MUSHRANAT---arctic_a0396---NCC",
        "Text": "A rising tide of fat had submerged them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0396.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0396.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0396.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0396.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0396.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0396.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0396.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0396.wav",
    }
  },
      {
        "Name": "arctic_a0424",
        "TestID": "MUSHRANAT---arctic_a0424---NCC",
        "Text": "Obviously, it was a disease that could be contracted by contact.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0424.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0424.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0424.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0424.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0424.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0424.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0424.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0424.wav",
    }
  },
      {
        "Name": "arctic_a0436",
        "TestID": "MUSHRANAT---arctic_a0436---NCC",
        "Text": "But Martin smiled a superior smile.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0436.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0436.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0436.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0436.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0436.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0436.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0436.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0436.wav",
    }
  },
      {
        "Name": "arctic_a0463",
        "TestID": "MUSHRANAT---arctic_a0463---NCC",
        "Text": "They are his tongue, by which he makes his knowledge articulate.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0463.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0463.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0463.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0463.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0463.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0463.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0463.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0463.wav",
    }
  },
      {
        "Name": "arctic_a0521",
        "TestID": "MUSHRANAT---arctic_a0521---NCC",
        "Text": "Without them he could not run his empire.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0521.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0521.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0521.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0521.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0521.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0521.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0521.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0521.wav",
    }
  },
      {
        "Name": "arctic_a0543",
        "TestID": "MUSHRANAT---arctic_a0543---NCC",
        "Text": "I had been born with no organic, chemical predisposition toward alcohol.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0543.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0543.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0543.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0543.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0543.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0543.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0543.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_a0543.wav",
    }
  },
      {
        "Name": "arctic_a0551",
        "TestID": "MUSHRANAT---arctic_a0551---NCC",
        "Text": "All an appearance can know is mirage.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0551.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0551.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0551.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0551.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0551.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0551.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0551.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0551.wav",
    }
  },
      {
        "Name": "arctic_a0554",
        "TestID": "MUSHRANAT---arctic_a0554---NCC",
        "Text": "Jack London, Waikiki Beach, Honolulu, Oahu.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0554.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0554.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0554.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0554.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0554.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0554.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0554.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_a0554.wav",
    }
  },
      {
        "Name": "arctic_a0589",
        "TestID": "MUSHRANAT---arctic_a0589---NCC",
        "Text": "I was sick once, typhoid.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_a0589.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_a0589.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_a0589.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_a0589.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_a0589.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_a0589.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_a0589.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_a0589.wav",
    }
  },
      {
        "Name": "arctic_b0004",
        "TestID": "MUSHRANAT---arctic_b0004---NCC",
        "Text": "When I can't see beauty in woman I want to die.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0004.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0004.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0004.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0004.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0004.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0004.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0004.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_b0004.wav",
    }
  },
      {
        "Name": "arctic_b0025",
        "TestID": "MUSHRANAT---arctic_b0025---NCC",
        "Text": "Now, you understand.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0025.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0025.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0025.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0025.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0025.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0025.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0025.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0025.wav",
    }
  },
      {
        "Name": "arctic_b0029",
        "TestID": "MUSHRANAT---arctic_b0029---NCC",
        "Text": "All operations have been carried on from Montreal and Toronto.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0029.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0029.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0029.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0029.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0029.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0029.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0029.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0029.wav",
    }
  },
      {
        "Name": "arctic_b0031",
        "TestID": "MUSHRANAT---arctic_b0031---NCC",
        "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0031.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0031.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0031.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0031.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0031.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0031.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0031.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0031.wav",
    }
  },
      {
        "Name": "arctic_b0032",
        "TestID": "MUSHRANAT---arctic_b0032---NCC",
        "Text": "He caught himself with a jerk.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0032.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0032.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0032.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0032.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0032.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0032.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0032.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_b0032.wav",
    }
  },
      {
        "Name": "arctic_b0037",
        "TestID": "MUSHRANAT---arctic_b0037---NCC",
        "Text": "Philip knew that she was not an Indian.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0037.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0037.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0037.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0037.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0037.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0037.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0037.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0037.wav",
    }
  },
      {
        "Name": "arctic_b0038",
        "TestID": "MUSHRANAT---arctic_b0038---NCC",
        "Text": "In her haste to get away she had forgotten these things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0038.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0038.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0038.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0038.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0038.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0038.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0038.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0038.wav",
    }
  },
      {
        "Name": "arctic_b0048",
        "TestID": "MUSHRANAT---arctic_b0048---NCC",
        "Text": "He looked like one who had passed through an uncomfortable hour or two.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0048.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0048.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0048.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0048.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0048.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0048.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0048.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_b0048.wav",
    }
  },
      {
        "Name": "arctic_b0049",
        "TestID": "MUSHRANAT---arctic_b0049---NCC",
        "Text": "There was nothing more, except a large ink blot under the words.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0049.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0049.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0049.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0049.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0049.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0049.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0049.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0049.wav",
    }
  },
      {
        "Name": "arctic_b0066",
        "TestID": "MUSHRANAT---arctic_b0066---NCC",
        "Text": "If I meet her again I shall apologize, said Eileen.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0066.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0066.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0066.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0066.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0066.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0066.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0066.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_b0066.wav",
    }
  },
      {
        "Name": "arctic_b0087",
        "TestID": "MUSHRANAT---arctic_b0087---NCC",
        "Text": "They will search for us between their camp and Churchill.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0087.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0087.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0087.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0087.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0087.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0087.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0087.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0087.wav",
    }
  },
      {
        "Name": "arctic_b0095",
        "TestID": "MUSHRANAT---arctic_b0095---NCC",
        "Text": "He heard a sound which brought him quickly into consciousness of day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0095.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0095.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0095.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0095.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0095.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0095.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0095.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0095.wav",
    }
  },
      {
        "Name": "arctic_b0098",
        "TestID": "MUSHRANAT---arctic_b0098---NCC",
        "Text": "Philip looked back from the crest and saw Jeanne leaning over the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0098.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0098.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0098.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0098.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0098.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0098.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0098.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_b0098.wav",
    }
  },
      {
        "Name": "arctic_b0107",
        "TestID": "MUSHRANAT---arctic_b0107---NCC",
        "Text": "He was sure, now, of but few things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0107.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0107.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0107.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0107.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0107.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0107.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0107.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0107.wav",
    }
  },
      {
        "Name": "arctic_b0128",
        "TestID": "MUSHRANAT---arctic_b0128---NCC",
        "Text": "Philip bent low over Pierre.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0128.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0128.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0128.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0128.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0128.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0128.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0128.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0128.wav",
    }
  },
      {
        "Name": "arctic_b0140",
        "TestID": "MUSHRANAT---arctic_b0140---NCC",
        "Text": "They edged nearer, and stood shoulder to shoulder facing their world.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0140.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0140.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0140.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0140.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0140.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0140.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0140.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0140.wav",
    }
  },
      {
        "Name": "arctic_b0141",
        "TestID": "MUSHRANAT---arctic_b0141---NCC",
        "Text": "It was beating and waiting in the ambush of those black pits.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0141.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0141.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0141.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0141.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0141.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0141.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0141.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0141.wav",
    }
  },
      {
        "Name": "arctic_b0145",
        "TestID": "MUSHRANAT---arctic_b0145---NCC",
        "Text": "Besides, had he not whipped the big owl in the forest.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0145.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0145.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0145.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0145.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0145.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0145.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0145.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_b0145.wav",
    }
  },
      {
        "Name": "arctic_b0154",
        "TestID": "MUSHRANAT---arctic_b0154---NCC",
        "Text": "That is the strange part of it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0154.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0154.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_b0154.wav",
    }
  },
      {
        "Name": "arctic_b0223",
        "TestID": "MUSHRANAT---arctic_b0223---NCC",
        "Text": "They likewise are disinclined to being eaten.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0223.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0223.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0223.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0223.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0223.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0223.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0223.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0223.wav",
    }
  },
      {
        "Name": "arctic_b0238",
        "TestID": "MUSHRANAT---arctic_b0238---NCC",
        "Text": "The very thought of the effort to swim over was nauseating.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0238.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0238.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0238.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0238.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0238.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0238.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0238.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_b0238.wav",
    }
  },
      {
        "Name": "arctic_b0299",
        "TestID": "MUSHRANAT---arctic_b0299---NCC",
        "Text": "Miss Brodie's smile was slightly sarcastic.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0299.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0299.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0299.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0299.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0299.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0299.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0299.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0299.wav",
    }
  },
      {
        "Name": "arctic_b0343",
        "TestID": "MUSHRANAT---arctic_b0343---NCC",
        "Text": "But how are you going to do it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0343.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0343.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0343.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0343.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0343.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0343.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0343.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0343.wav",
    }
  },
      {
        "Name": "arctic_b0344",
        "TestID": "MUSHRANAT---arctic_b0344---NCC",
        "Text": "Lots of men take women buggy riding.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0344.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0344.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0344.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0344.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0344.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0344.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0344.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0344.wav",
    }
  },
      {
        "Name": "arctic_b0346",
        "TestID": "MUSHRANAT---arctic_b0346---NCC",
        "Text": "There's not an iota of truth in it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0346.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0346.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0346.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0346.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0346.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0346.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0346.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0346.wav",
    }
  },
      {
        "Name": "arctic_b0353",
        "TestID": "MUSHRANAT---arctic_b0353---NCC",
        "Text": "I want to know how all this is possible.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0353.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0353.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0353.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0353.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0353.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0353.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0353.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0353.wav",
    }
  },
      {
        "Name": "arctic_b0375",
        "TestID": "MUSHRANAT---arctic_b0375---NCC",
        "Text": "Man could not conquer them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0375.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0375.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0375.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0375.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0375.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0375.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0375.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_b0375.wav",
    }
  },
      {
        "Name": "arctic_b0383",
        "TestID": "MUSHRANAT---arctic_b0383---NCC",
        "Text": "A bush chief had died a natural death.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0383.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0383.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0383.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0383.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0383.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0383.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0383.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0383.wav",
    }
  },
      {
        "Name": "arctic_b0407",
        "TestID": "MUSHRANAT---arctic_b0407---NCC",
        "Text": "Of course much grumbling went on, and little outbursts were continually occurring.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0407.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0407.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0407.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0407.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0407.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0407.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0407.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0407.wav",
    }
  },
      {
        "Name": "arctic_b0419",
        "TestID": "MUSHRANAT---arctic_b0419---NCC",
        "Text": "Your father's fifth command, he nodded.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0419.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0419.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0419.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0419.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0419.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0419.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0419.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0419.wav",
    }
  },
      {
        "Name": "arctic_b0421",
        "TestID": "MUSHRANAT---arctic_b0421---NCC",
        "Text": "She is essentially the life-giving, life-conserving female of the species.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0421.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0421.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0421.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0421.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0421.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0421.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0421.wav",
      "ours---2": "./audio/20240815_spaccent/ours_NCC/arctic_b0421.wav",
    }
  },
      {
        "Name": "arctic_b0434",
        "TestID": "MUSHRANAT---arctic_b0434---NCC",
        "Text": "The steward has just tendered me a respectful bit of advice.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0434.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0434.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0434.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0434.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0434.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0434.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0434.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_b0434.wav",
    }
  },
      {
        "Name": "arctic_b0439",
        "TestID": "MUSHRANAT---arctic_b0439---NCC",
        "Text": "The land exchanged its austere robes for the garb of a smiling wanton.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0439.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0439.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0439.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0439.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0439.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0439.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0439.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0439.wav",
    }
  },
      {
        "Name": "arctic_b0441",
        "TestID": "MUSHRANAT---arctic_b0441---NCC",
        "Text": "And there was Ethel Baird, whom also you must remember.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0441.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0441.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0441.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0441.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0441.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0441.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0441.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_NCC/arctic_b0441.wav",
    }
  },
      {
        "Name": "arctic_b0450",
        "TestID": "MUSHRANAT---arctic_b0450---NCC",
        "Text": "To my dearest and always appreciated friend, I submit myself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0450.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0450.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0450.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0450.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0450.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0450.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0450.wav",
      "source---2": "./audio/20240815_spaccent/source_NCC/arctic_b0450.wav",
    }
  },
      {
        "Name": "arctic_b0487",
        "TestID": "MUSHRANAT---arctic_b0487---NCC",
        "Text": "After all superfluous flesh is gone what is left is stringy and resistant.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0487.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0487.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0487.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0487.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0487.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0487.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0487.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_NCC/arctic_b0487.wav",
    }
  },
      {
        "Name": "arctic_b0490",
        "TestID": "MUSHRANAT---arctic_b0490---NCC",
        "Text": "What an excited whispering and conferring took place.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0490.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0490.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0490.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0490.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0490.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0490.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0490.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0490.wav",
    }
  },
      {
        "Name": "arctic_b0503",
        "TestID": "MUSHRANAT---arctic_b0503---NCC",
        "Text": "The scents of strange vegetation blew off the tropic land.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0503.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0503.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0503.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0503.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0503.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0503.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0503.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0503.wav",
    }
  },
      {
        "Name": "arctic_b0515",
        "TestID": "MUSHRANAT---arctic_b0515---NCC",
        "Text": "But already he had composed himself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_NCC/arctic_b0515.wav",
      "resynth": "./audio/20240815_spaccent/resynth_NCC/arctic_b0515.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_NCC/arctic_b0515.wav",
      "ours": "./audio/20240815_spaccent/ours_NCC/arctic_b0515.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_NCC/arctic_b0515.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0515.wav",
      "baseline": "./audio/20240815_spaccent/baseline_NCC/arctic_b0515.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_NCC/arctic_b0515.wav",
    }
  },
      {
        "Name": "arctic_a0017",
        "TestID": "MUSHRANAT---arctic_a0017---TXHC",
        "Text": "From that moment his friendship for Belize turns to hatred and jealousy.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0017.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0017.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0017.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0017.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0017.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0017.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0017.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0017.wav",
    }
  },
      {
        "Name": "arctic_a0026",
        "TestID": "MUSHRANAT---arctic_a0026---TXHC",
        "Text": "It occurred to me that there would have to be an accounting.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0026.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0026.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0026.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0026.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0026.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0026.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0026.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0026.wav",
    }
  },
      {
        "Name": "arctic_a0045",
        "TestID": "MUSHRANAT---arctic_a0045---TXHC",
        "Text": "He moved away as quietly as he had come.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0045.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0045.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0045.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0045.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0045.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0045.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0045.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_a0045.wav",
    }
  },
      {
        "Name": "arctic_a0046",
        "TestID": "MUSHRANAT---arctic_a0046---TXHC",
        "Text": "The girl faced him, her eyes shining with sudden fear.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0046.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0046.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0046.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0046.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0046.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0046.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0046.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0046.wav",
    }
  },
      {
        "Name": "arctic_a0053",
        "TestID": "MUSHRANAT---arctic_a0053---TXHC",
        "Text": "Suddenly his fingers closed tightly over the handkerchief.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0053.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0053.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0053.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0053.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0053.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0053.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0053.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0053.wav",
    }
  },
      {
        "Name": "arctic_a0059",
        "TestID": "MUSHRANAT---arctic_a0059---TXHC",
        "Text": "His immaculate appearance was gone.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0059.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0059.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0059.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0059.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0059.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0059.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0059.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0059.wav",
    }
  },
      {
        "Name": "arctic_a0065",
        "TestID": "MUSHRANAT---arctic_a0065---TXHC",
        "Text": "They closed now until his fingers were like cords of steel.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0065.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0065.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0065.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0065.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0065.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0065.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0065.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0065.wav",
    }
  },
      {
        "Name": "arctic_a0069",
        "TestID": "MUSHRANAT---arctic_a0069---TXHC",
        "Text": "It was his intention to return to Eileen and her father.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0069.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0069.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0069.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0069.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0069.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0069.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0069.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0069.wav",
    }
  },
      {
        "Name": "arctic_a0084",
        "TestID": "MUSHRANAT---arctic_a0084---TXHC",
        "Text": "Scarcely had he uttered the name when Pierre's closing eyes shot open.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0084.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0084.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0084.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0084.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0084.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0084.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0084.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0084.wav",
    }
  },
      {
        "Name": "arctic_a0088",
        "TestID": "MUSHRANAT---arctic_a0088---TXHC",
        "Text": "He made sure that the magazine was loaded, and resumed his paddling.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0088.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0088.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0088.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0088.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0088.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0088.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0088.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0088.wav",
    }
  },
      {
        "Name": "arctic_a0103",
        "TestID": "MUSHRANAT---arctic_a0103---TXHC",
        "Text": "But there came no promise from the bow of the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0103.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0103.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0103.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0103.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0103.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0103.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0103.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0103.wav",
    }
  },
      {
        "Name": "arctic_a0109",
        "TestID": "MUSHRANAT---arctic_a0109---TXHC",
        "Text": "Do you know that you are shaking my confidence in you.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0109.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0109.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0109.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0109.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0109.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0109.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0109.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0109.wav",
    }
  },
      {
        "Name": "arctic_a0154",
        "TestID": "MUSHRANAT---arctic_a0154---TXHC",
        "Text": "He was smooth-shaven, and his hair and eyes were black.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0154.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0154.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0154.wav",
    }
  },
      {
        "Name": "arctic_a0175",
        "TestID": "MUSHRANAT---arctic_a0175---TXHC",
        "Text": "Down there the earth was already swelling with life.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0175.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0175.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0175.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0175.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0175.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0175.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0175.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0175.wav",
    }
  },
      {
        "Name": "arctic_a0199",
        "TestID": "MUSHRANAT---arctic_a0199---TXHC",
        "Text": "Thus had the raw wilderness prepared him for this day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0199.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0199.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0199.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0199.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0199.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0199.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0199.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0199.wav",
    }
  },
      {
        "Name": "arctic_a0209",
        "TestID": "MUSHRANAT---arctic_a0209---TXHC",
        "Text": "It was not a large lake, and almost round.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0209.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0209.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0209.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0209.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0209.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0209.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0209.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_a0209.wav",
    }
  },
      {
        "Name": "arctic_a0216",
        "TestID": "MUSHRANAT---arctic_a0216---TXHC",
        "Text": "The other felt a sudden wave of irritation rush through him.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0216.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0216.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0216.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0216.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0216.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0216.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0216.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0216.wav",
    }
  },
      {
        "Name": "arctic_a0225",
        "TestID": "MUSHRANAT---arctic_a0225---TXHC",
        "Text": "I was brought up the way most girls in Hawaii are brought up.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0225.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0225.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0225.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0225.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0225.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0225.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0225.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0225.wav",
    }
  },
      {
        "Name": "arctic_a0233",
        "TestID": "MUSHRANAT---arctic_a0233---TXHC",
        "Text": "I never allow what can't be changed to annoy me.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0233.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0233.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0233.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0233.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0233.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0233.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0233.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0233.wav",
    }
  },
      {
        "Name": "arctic_a0252",
        "TestID": "MUSHRANAT---arctic_a0252---TXHC",
        "Text": "O'Brien had been a clean living young man with ideals.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0252.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0252.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0252.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0252.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0252.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0252.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0252.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0252.wav",
    }
  },
      {
        "Name": "arctic_a0268",
        "TestID": "MUSHRANAT---arctic_a0268---TXHC",
        "Text": "Now go ahead and tell me in a straightforward way what has happened.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0268.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0268.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0268.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0268.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0268.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0268.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0268.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0268.wav",
    }
  },
      {
        "Name": "arctic_a0290",
        "TestID": "MUSHRANAT---arctic_a0290---TXHC",
        "Text": "One by one the boys were captured.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0290.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0290.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0290.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0290.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0290.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0290.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0290.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0290.wav",
    }
  },
      {
        "Name": "arctic_a0296",
        "TestID": "MUSHRANAT---arctic_a0296---TXHC",
        "Text": "Bassett was a fastidious man.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0296.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0296.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0296.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0296.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0296.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0296.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0296.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0296.wav",
    }
  },
      {
        "Name": "arctic_a0300",
        "TestID": "MUSHRANAT---arctic_a0300---TXHC",
        "Text": "From my earliest recollection my sleep was a period of terror.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0300.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0300.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0300.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0300.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0300.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0300.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0300.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0300.wav",
    }
  },
      {
        "Name": "arctic_a0312",
        "TestID": "MUSHRANAT---arctic_a0312---TXHC",
        "Text": "It lived in perpetual apprehension of that quarter of the compass.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0312.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0312.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0312.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0312.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0312.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0312.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0312.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0312.wav",
    }
  },
      {
        "Name": "arctic_a0354",
        "TestID": "MUSHRANAT---arctic_a0354---TXHC",
        "Text": "Fresh meat they failed to obtain.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0354.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0354.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0354.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0354.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0354.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0354.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0354.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0354.wav",
    }
  },
      {
        "Name": "arctic_a0367",
        "TestID": "MUSHRANAT---arctic_a0367---TXHC",
        "Text": "There is not an iota of truth in it, certainly not.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0367.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0367.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0367.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0367.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0367.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0367.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0367.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0367.wav",
    }
  },
      {
        "Name": "arctic_a0368",
        "TestID": "MUSHRANAT---arctic_a0368---TXHC",
        "Text": "I just do appreciate it without being able to express my feelings.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0368.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0368.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0368.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0368.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0368.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0368.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0368.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0368.wav",
    }
  },
      {
        "Name": "arctic_a0372",
        "TestID": "MUSHRANAT---arctic_a0372---TXHC",
        "Text": "He saw only the effect in a general, sketchy way.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0372.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0372.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0372.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0372.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0372.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0372.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0372.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0372.wav",
    }
  },
      {
        "Name": "arctic_a0374",
        "TestID": "MUSHRANAT---arctic_a0374---TXHC",
        "Text": "But life's worth more than cash, she argued.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0374.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0374.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0374.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0374.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0374.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0374.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0374.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0374.wav",
    }
  },
      {
        "Name": "arctic_a0389",
        "TestID": "MUSHRANAT---arctic_a0389---TXHC",
        "Text": "Mab, she said.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0389.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0389.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0389.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0389.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0389.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0389.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0389.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0389.wav",
    }
  },
      {
        "Name": "arctic_a0391",
        "TestID": "MUSHRANAT---arctic_a0391---TXHC",
        "Text": "But he reconciled himself to it by an act of faith.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0391.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0391.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0391.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0391.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0391.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0391.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0391.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0391.wav",
    }
  },
      {
        "Name": "arctic_a0396",
        "TestID": "MUSHRANAT---arctic_a0396---TXHC",
        "Text": "A rising tide of fat had submerged them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0396.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0396.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0396.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0396.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0396.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0396.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0396.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0396.wav",
    }
  },
      {
        "Name": "arctic_a0424",
        "TestID": "MUSHRANAT---arctic_a0424---TXHC",
        "Text": "Obviously, it was a disease that could be contracted by contact.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0424.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0424.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0424.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0424.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0424.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0424.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0424.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0424.wav",
    }
  },
      {
        "Name": "arctic_a0436",
        "TestID": "MUSHRANAT---arctic_a0436---TXHC",
        "Text": "But Martin smiled a superior smile.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0436.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0436.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0436.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0436.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0436.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0436.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0436.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0436.wav",
    }
  },
      {
        "Name": "arctic_a0463",
        "TestID": "MUSHRANAT---arctic_a0463---TXHC",
        "Text": "They are his tongue, by which he makes his knowledge articulate.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0463.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0463.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0463.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0463.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0463.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0463.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0463.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0463.wav",
    }
  },
      {
        "Name": "arctic_a0521",
        "TestID": "MUSHRANAT---arctic_a0521---TXHC",
        "Text": "Without them he could not run his empire.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0521.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0521.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0521.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0521.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0521.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0521.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0521.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0521.wav",
    }
  },
      {
        "Name": "arctic_a0543",
        "TestID": "MUSHRANAT---arctic_a0543---TXHC",
        "Text": "I had been born with no organic, chemical predisposition toward alcohol.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0543.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0543.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0543.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0543.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0543.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0543.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0543.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_a0543.wav",
    }
  },
      {
        "Name": "arctic_a0551",
        "TestID": "MUSHRANAT---arctic_a0551---TXHC",
        "Text": "All an appearance can know is mirage.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0551.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0551.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0551.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0551.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0551.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0551.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0551.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0551.wav",
    }
  },
      {
        "Name": "arctic_a0554",
        "TestID": "MUSHRANAT---arctic_a0554---TXHC",
        "Text": "Jack London, Waikiki Beach, Honolulu, Oahu.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0554.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0554.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0554.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0554.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0554.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0554.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0554.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0554.wav",
    }
  },
      {
        "Name": "arctic_a0589",
        "TestID": "MUSHRANAT---arctic_a0589---TXHC",
        "Text": "I was sick once, typhoid.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_a0589.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_a0589.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_a0589.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_a0589.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_a0589.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_a0589.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0589.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_a0589.wav",
    }
  },
      {
        "Name": "arctic_b0004",
        "TestID": "MUSHRANAT---arctic_b0004---TXHC",
        "Text": "When I can't see beauty in woman I want to die.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0004.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0004.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0004.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0004.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0004.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0004.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0004.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_b0004.wav",
    }
  },
      {
        "Name": "arctic_b0025",
        "TestID": "MUSHRANAT---arctic_b0025---TXHC",
        "Text": "Now, you understand.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0025.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0025.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0025.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0025.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0025.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0025.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0025.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0025.wav",
    }
  },
      {
        "Name": "arctic_b0029",
        "TestID": "MUSHRANAT---arctic_b0029---TXHC",
        "Text": "All operations have been carried on from Montreal and Toronto.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0029.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0029.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0029.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0029.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0029.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0029.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0029.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0029.wav",
    }
  },
      {
        "Name": "arctic_b0031",
        "TestID": "MUSHRANAT---arctic_b0031---TXHC",
        "Text": "Gregson had seated himself under the lamp and was sharpening a pencil.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0031.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0031.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0031.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0031.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0031.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0031.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0031.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0031.wav",
    }
  },
      {
        "Name": "arctic_b0032",
        "TestID": "MUSHRANAT---arctic_b0032---TXHC",
        "Text": "He caught himself with a jerk.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0032.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0032.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0032.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0032.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0032.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0032.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0032.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_b0032.wav",
    }
  },
      {
        "Name": "arctic_b0037",
        "TestID": "MUSHRANAT---arctic_b0037---TXHC",
        "Text": "Philip knew that she was not an Indian.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0037.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0037.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0037.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0037.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0037.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0037.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0037.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0037.wav",
    }
  },
      {
        "Name": "arctic_b0038",
        "TestID": "MUSHRANAT---arctic_b0038---TXHC",
        "Text": "In her haste to get away she had forgotten these things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0038.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0038.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0038.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0038.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0038.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0038.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0038.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0038.wav",
    }
  },
      {
        "Name": "arctic_b0048",
        "TestID": "MUSHRANAT---arctic_b0048---TXHC",
        "Text": "He looked like one who had passed through an uncomfortable hour or two.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0048.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0048.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0048.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0048.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0048.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0048.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0048.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_b0048.wav",
    }
  },
      {
        "Name": "arctic_b0049",
        "TestID": "MUSHRANAT---arctic_b0049---TXHC",
        "Text": "There was nothing more, except a large ink blot under the words.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0049.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0049.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0049.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0049.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0049.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0049.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0049.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0049.wav",
    }
  },
      {
        "Name": "arctic_b0066",
        "TestID": "MUSHRANAT---arctic_b0066---TXHC",
        "Text": "If I meet her again I shall apologize, said Eileen.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0066.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0066.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0066.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0066.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0066.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0066.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0066.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_b0066.wav",
    }
  },
      {
        "Name": "arctic_b0087",
        "TestID": "MUSHRANAT---arctic_b0087---TXHC",
        "Text": "They will search for us between their camp and Churchill.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0087.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0087.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0087.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0087.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0087.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0087.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0087.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0087.wav",
    }
  },
      {
        "Name": "arctic_b0095",
        "TestID": "MUSHRANAT---arctic_b0095---TXHC",
        "Text": "He heard a sound which brought him quickly into consciousness of day.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0095.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0095.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0095.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0095.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0095.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0095.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0095.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0095.wav",
    }
  },
      {
        "Name": "arctic_b0098",
        "TestID": "MUSHRANAT---arctic_b0098---TXHC",
        "Text": "Philip looked back from the crest and saw Jeanne leaning over the canoe.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0098.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0098.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0098.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0098.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0098.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0098.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0098.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0098.wav",
    }
  },
      {
        "Name": "arctic_b0107",
        "TestID": "MUSHRANAT---arctic_b0107---TXHC",
        "Text": "He was sure, now, of but few things.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0107.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0107.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0107.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0107.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0107.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0107.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0107.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0107.wav",
    }
  },
      {
        "Name": "arctic_b0128",
        "TestID": "MUSHRANAT---arctic_b0128---TXHC",
        "Text": "Philip bent low over Pierre.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0128.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0128.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0128.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0128.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0128.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0128.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0128.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0128.wav",
    }
  },
      {
        "Name": "arctic_b0140",
        "TestID": "MUSHRANAT---arctic_b0140---TXHC",
        "Text": "They edged nearer, and stood shoulder to shoulder facing their world.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0140.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0140.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0140.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0140.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0140.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0140.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0140.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0140.wav",
    }
  },
      {
        "Name": "arctic_b0141",
        "TestID": "MUSHRANAT---arctic_b0141---TXHC",
        "Text": "It was beating and waiting in the ambush of those black pits.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0141.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0141.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0141.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0141.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0141.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0141.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0141.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0141.wav",
    }
  },
      {
        "Name": "arctic_b0145",
        "TestID": "MUSHRANAT---arctic_b0145---TXHC",
        "Text": "Besides, had he not whipped the big owl in the forest.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0145.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0145.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0145.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0145.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0145.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0145.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0145.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_b0145.wav",
    }
  },
      {
        "Name": "arctic_b0154",
        "TestID": "MUSHRANAT---arctic_b0154---TXHC",
        "Text": "That is the strange part of it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0154.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0154.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0154.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0154.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0154.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0154.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0154.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0154.wav",
    }
  },
      {
        "Name": "arctic_b0223",
        "TestID": "MUSHRANAT---arctic_b0223---TXHC",
        "Text": "They likewise are disinclined to being eaten.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0223.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0223.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0223.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0223.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0223.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0223.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0223.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0223.wav",
    }
  },
      {
        "Name": "arctic_b0238",
        "TestID": "MUSHRANAT---arctic_b0238---TXHC",
        "Text": "The very thought of the effort to swim over was nauseating.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0238.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0238.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0238.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0238.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0238.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0238.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0238.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_b0238.wav",
    }
  },
      {
        "Name": "arctic_b0299",
        "TestID": "MUSHRANAT---arctic_b0299---TXHC",
        "Text": "Miss Brodie's smile was slightly sarcastic.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0299.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0299.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0299.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0299.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0299.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0299.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0299.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0299.wav",
    }
  },
      {
        "Name": "arctic_b0343",
        "TestID": "MUSHRANAT---arctic_b0343---TXHC",
        "Text": "But how are you going to do it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0343.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0343.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0343.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0343.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0343.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0343.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0343.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0343.wav",
    }
  },
      {
        "Name": "arctic_b0344",
        "TestID": "MUSHRANAT---arctic_b0344---TXHC",
        "Text": "Lots of men take women buggy riding.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0344.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0344.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0344.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0344.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0344.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0344.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0344.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0344.wav",
    }
  },
      {
        "Name": "arctic_b0346",
        "TestID": "MUSHRANAT---arctic_b0346---TXHC",
        "Text": "There's not an iota of truth in it.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0346.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0346.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0346.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0346.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0346.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0346.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0346.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0346.wav",
    }
  },
      {
        "Name": "arctic_b0353",
        "TestID": "MUSHRANAT---arctic_b0353---TXHC",
        "Text": "I want to know how all this is possible.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0353.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0353.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0353.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0353.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0353.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0353.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0353.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0353.wav",
    }
  },
      {
        "Name": "arctic_b0375",
        "TestID": "MUSHRANAT---arctic_b0375---TXHC",
        "Text": "Man could not conquer them.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0375.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0375.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0375.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0375.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0375.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0375.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0375.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_b0375.wav",
    }
  },
      {
        "Name": "arctic_b0383",
        "TestID": "MUSHRANAT---arctic_b0383---TXHC",
        "Text": "A bush chief had died a natural death.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0383.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0383.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0383.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0383.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0383.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0383.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0383.wav",
      "pseudo---2": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0383.wav",
    }
  },
      {
        "Name": "arctic_b0407",
        "TestID": "MUSHRANAT---arctic_b0407---TXHC",
        "Text": "Of course much grumbling went on, and little outbursts were continually occurring.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0407.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0407.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0407.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0407.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0407.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0407.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0407.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0407.wav",
    }
  },
      {
        "Name": "arctic_b0419",
        "TestID": "MUSHRANAT---arctic_b0419---TXHC",
        "Text": "Your father's fifth command, he nodded.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0419.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0419.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0419.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0419.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0419.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0419.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0419.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0419.wav",
    }
  },
      {
        "Name": "arctic_b0421",
        "TestID": "MUSHRANAT---arctic_b0421---TXHC",
        "Text": "She is essentially the life-giving, life-conserving female of the species.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0421.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0421.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0421.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0421.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0421.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0421.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0421.wav",
      "ours---2": "./audio/20240815_spaccent/ours_TXHC/arctic_b0421.wav",
    }
  },
      {
        "Name": "arctic_b0434",
        "TestID": "MUSHRANAT---arctic_b0434---TXHC",
        "Text": "The steward has just tendered me a respectful bit of advice.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0434.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0434.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0434.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0434.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0434.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0434.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0434.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_b0434.wav",
    }
  },
      {
        "Name": "arctic_b0439",
        "TestID": "MUSHRANAT---arctic_b0439---TXHC",
        "Text": "The land exchanged its austere robes for the garb of a smiling wanton.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0439.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0439.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0439.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0439.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0439.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0439.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0439.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0439.wav",
    }
  },
      {
        "Name": "arctic_b0441",
        "TestID": "MUSHRANAT---arctic_b0441---TXHC",
        "Text": "And there was Ethel Baird, whom also you must remember.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0441.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0441.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0441.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0441.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0441.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0441.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0441.wav",
      "baseline---2": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0441.wav",
    }
  },
      {
        "Name": "arctic_b0450",
        "TestID": "MUSHRANAT---arctic_b0450---TXHC",
        "Text": "To my dearest and always appreciated friend, I submit myself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0450.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0450.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0450.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0450.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0450.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0450.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0450.wav",
      "source---2": "./audio/20240815_spaccent/source_TXHC/arctic_b0450.wav",
    }
  },
      {
        "Name": "arctic_b0487",
        "TestID": "MUSHRANAT---arctic_b0487---TXHC",
        "Text": "After all superfluous flesh is gone what is left is stringy and resistant.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0487.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0487.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0487.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0487.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0487.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0487.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0487.wav",
      "resynth---2": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0487.wav",
    }
  },
      {
        "Name": "arctic_b0490",
        "TestID": "MUSHRANAT---arctic_b0490---TXHC",
        "Text": "What an excited whispering and conferring took place.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0490.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0490.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0490.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0490.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0490.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0490.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0490.wav",
      "ours-scale---2": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0490.wav",
    }
  },
      {
        "Name": "arctic_b0503",
        "TestID": "MUSHRANAT---arctic_b0503---TXHC",
        "Text": "The scents of strange vegetation blew off the tropic land.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0503.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0503.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0503.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0503.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0503.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0503.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0503.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0503.wav",
    }
  },
      {
        "Name": "arctic_b0515",
        "TestID": "MUSHRANAT---arctic_b0515---TXHC",
        "Text": "But already he had composed himself.",
        "Files": {
      "source": "./audio/20240815_spaccent/source_TXHC/arctic_b0515.wav",
      "resynth": "./audio/20240815_spaccent/resynth_TXHC/arctic_b0515.wav",
      "pseudo": "./audio/20240815_spaccent/pseudo_TXHC/arctic_b0515.wav",
      "ours": "./audio/20240815_spaccent/ours_TXHC/arctic_b0515.wav",
      "ours-scale": "./audio/20240815_spaccent/ours-scale_TXHC/arctic_b0515.wav",
      "ours-control-scale": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0515.wav",
      "baseline": "./audio/20240815_spaccent/baseline_TXHC/arctic_b0515.wav",
      "ours-control-scale---2": "./audio/20240815_spaccent/ours-control-scale_TXHC/arctic_b0515.wav",
    }
  },
]
}