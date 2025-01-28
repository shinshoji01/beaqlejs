var TestConfig = {
      "TestName": "Expected Trend of Conversation Traits",
      "RateScalePng": "img/alignment.png",
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
      "MaxTestsPerRun": 15,
      "RequireMaxRating": false,
      "AudioRoot": "",
      "Testsets":
    [
  {
    "Name": "Target Personality: Openness",
    "TestID": "Openness",
    "Text": "Please relate the personality <b>Openness</b> to conversation traits. You are required to answer whether each conversation trait (e.g. Frequency of Laughter) is aligned with <b>Openness</b>.<br><br><b>Target Personality</b>: Openness<br><b>Explanation to 'Openness'</b>: intellectual, imaginative, independent-minded<br><b>Opposite Term</b>: 'Closeness'",
    "Files": {
      "<b>Number of Turns: </b>The number of turns, defined as text responses separated by 700 ms, excluding backchannels and unsuccessful interjections": "./audio/sample.wav",
      "<b>Talking Time per Turn: </b>The average duration of speech per turn": "./audio/sample.wav",
      "<b>Frequency of Laughter: </b>The number of laughter occurrences per minute of speech": "./audio/sample.wav",
      "<b>Frequency of Emotive Backchannel: </b>The number of emotive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Cognitive Backchannel: </b>The number of cognitive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Interjections: </b>The total count of successful and unsuccessful interjections": "./audio/sample.wav",
      "<b>Positive Sentiment: </b>Tendency to say something positive": "./audio/sample.wav",
      "<b>Neutral Sentiment: </b>Tendency to say something neutral sentiment": "./audio/sample.wav",
      "<b>Negative Sentiment: </b>Tendency to say something negative": "./audio/sample.wav",
      "<b>Emotional Statement (Anger): </b>Tendency to say something with angry emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Disgust): </b>Tendency to say something with disgust emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Fear): </b>Tendency to say something with fear emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Joy): </b>Tendency to say something with joy emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Neutral): </b>Tendency to say something with neutral emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Sadness): </b>Tendency to say something with sad emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Surprise): </b>Tendency to say something with surprise emotion": "./audio/sample.wav",
    }
  },
  {
    "Name": "Target Personality: Conscientiousness",
    "TestID": "Conscientiousness",
    "Text": "Please relate the personality <b>Conscientiousness</b> to conversation traits. You are required to answer whether each conversation trait (e.g. Frequency of Laughter) is aligned with <b>Conscientiousness</b>.<br><br><b>Target Personality</b>: Conscientiousness<br><b>Explanation to 'Conscientiousness'</b>: orderly, responsible, dependable<br><b>Opposite Term</b>: 'Lack of direction'",
    "Files": {
      "<b>Number of Turns: </b>The number of turns, defined as text responses separated by 700 ms, excluding backchannels and unsuccessful interjections": "./audio/sample.wav",
      "<b>Talking Time per Turn: </b>The average duration of speech per turn": "./audio/sample.wav",
      "<b>Frequency of Laughter: </b>The number of laughter occurrences per minute of speech": "./audio/sample.wav",
      "<b>Frequency of Emotive Backchannel: </b>The number of emotive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Cognitive Backchannel: </b>The number of cognitive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Interjections: </b>The total count of successful and unsuccessful interjections": "./audio/sample.wav",
      "<b>Positive Sentiment: </b>Tendency to say something positive": "./audio/sample.wav",
      "<b>Neutral Sentiment: </b>Tendency to say something neutral sentiment": "./audio/sample.wav",
      "<b>Negative Sentiment: </b>Tendency to say something negative": "./audio/sample.wav",
      "<b>Emotional Statement (Anger): </b>Tendency to say something with angry emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Disgust): </b>Tendency to say something with disgust emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Fear): </b>Tendency to say something with fear emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Joy): </b>Tendency to say something with joy emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Neutral): </b>Tendency to say something with neutral emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Sadness): </b>Tendency to say something with sad emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Surprise): </b>Tendency to say something with surprise emotion": "./audio/sample.wav",
    }
  },
  {
    "Name": "Target Personality: Extraversion",
    "TestID": "Extraversion",
    "Text": "Please relate the personality <b>Extraversion</b> to conversation traits. You are required to answer whether each conversation trait (e.g. Frequency of Laughter) is aligned with <b>Extraversion</b>.<br><br><b>Target Personality</b>: Extraversion<br><b>Explanation to 'Extraversion'</b>: talkative, assertive, energetic<br><b>Opposite Term</b>: 'Introversion'",
    "Files": {
      "<b>Number of Turns: </b>The number of turns, defined as text responses separated by 700 ms, excluding backchannels and unsuccessful interjections": "./audio/sample.wav",
      "<b>Talking Time per Turn: </b>The average duration of speech per turn": "./audio/sample.wav",
      "<b>Frequency of Laughter: </b>The number of laughter occurrences per minute of speech": "./audio/sample.wav",
      "<b>Frequency of Emotive Backchannel: </b>The number of emotive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Cognitive Backchannel: </b>The number of cognitive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Interjections: </b>The total count of successful and unsuccessful interjections": "./audio/sample.wav",
      "<b>Positive Sentiment: </b>Tendency to say something positive": "./audio/sample.wav",
      "<b>Neutral Sentiment: </b>Tendency to say something neutral sentiment": "./audio/sample.wav",
      "<b>Negative Sentiment: </b>Tendency to say something negative": "./audio/sample.wav",
      "<b>Emotional Statement (Anger): </b>Tendency to say something with angry emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Disgust): </b>Tendency to say something with disgust emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Fear): </b>Tendency to say something with fear emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Joy): </b>Tendency to say something with joy emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Neutral): </b>Tendency to say something with neutral emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Sadness): </b>Tendency to say something with sad emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Surprise): </b>Tendency to say something with surprise emotion": "./audio/sample.wav",
    }
  },
  {
    "Name": "Target Personality: Agreeableness",
    "TestID": "Agreeableness",
    "Text": "Please relate the personality <b>Agreeableness</b> to conversation traits. You are required to answer whether each conversation trait (e.g. Frequency of Laughter) is aligned with <b>Agreeableness</b>.<br><br><b>Target Personality</b>: Agreeableness<br><b>Explanation to 'Agreeableness'</b>: good-natured, cooperative, trustful<br><b>Opposite Term</b>: 'Antagonism'",
    "Files": {
      "<b>Number of Turns: </b>The number of turns, defined as text responses separated by 700 ms, excluding backchannels and unsuccessful interjections": "./audio/sample.wav",
      "<b>Talking Time per Turn: </b>The average duration of speech per turn": "./audio/sample.wav",
      "<b>Frequency of Laughter: </b>The number of laughter occurrences per minute of speech": "./audio/sample.wav",
      "<b>Frequency of Emotive Backchannel: </b>The number of emotive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Cognitive Backchannel: </b>The number of cognitive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Interjections: </b>The total count of successful and unsuccessful interjections": "./audio/sample.wav",
      "<b>Positive Sentiment: </b>Tendency to say something positive": "./audio/sample.wav",
      "<b>Neutral Sentiment: </b>Tendency to say something neutral sentiment": "./audio/sample.wav",
      "<b>Negative Sentiment: </b>Tendency to say something negative": "./audio/sample.wav",
      "<b>Emotional Statement (Anger): </b>Tendency to say something with angry emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Disgust): </b>Tendency to say something with disgust emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Fear): </b>Tendency to say something with fear emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Joy): </b>Tendency to say something with joy emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Neutral): </b>Tendency to say something with neutral emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Sadness): </b>Tendency to say something with sad emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Surprise): </b>Tendency to say something with surprise emotion": "./audio/sample.wav",
    }
  },
  {
    "Name": "Target Personality: Neuroticism",
    "TestID": "Neuroticism",
    "Text": "Please relate the personality <b>Neuroticism</b> to conversation traits. You are required to answer whether each conversation trait (e.g. Frequency of Laughter) is aligned with <b>Neuroticism</b>.<br><br><b>Target Personality</b>: Neuroticism<br><b>Explanation to 'Neuroticism'</b>: emotional instability, irritability, anxiety, self-doubt, depression<br><b>Opposite Term</b>: 'Emotion stability'",
    "Files": {
      "<b>Number of Turns: </b>The number of turns, defined as text responses separated by 700 ms, excluding backchannels and unsuccessful interjections": "./audio/sample.wav",
      "<b>Talking Time per Turn: </b>The average duration of speech per turn": "./audio/sample.wav",
      "<b>Frequency of Laughter: </b>The number of laughter occurrences per minute of speech": "./audio/sample.wav",
      "<b>Frequency of Emotive Backchannel: </b>The number of emotive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Cognitive Backchannel: </b>The number of cognitive backchannels per minute during another speaker's speech": "./audio/sample.wav",
      "<b>Frequency of Interjections: </b>The total count of successful and unsuccessful interjections": "./audio/sample.wav",
      "<b>Positive Sentiment: </b>Tendency to say something positive": "./audio/sample.wav",
      "<b>Neutral Sentiment: </b>Tendency to say something neutral sentiment": "./audio/sample.wav",
      "<b>Negative Sentiment: </b>Tendency to say something negative": "./audio/sample.wav",
      "<b>Emotional Statement (Anger): </b>Tendency to say something with angry emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Disgust): </b>Tendency to say something with disgust emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Fear): </b>Tendency to say something with fear emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Joy): </b>Tendency to say something with joy emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Neutral): </b>Tendency to say something with neutral emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Sadness): </b>Tendency to say something with sad emotion": "./audio/sample.wav",
      "<b>Emotional Statement (Surprise): </b>Tendency to say something with surprise emotion": "./audio/sample.wav",
    }
  },
]
}