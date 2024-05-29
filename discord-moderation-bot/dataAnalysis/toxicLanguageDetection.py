# toxicLanguageDetection.py

import pandas as pd
from googleapiclient import discovery

class ToxicLanguageDetector:
    def __init__(self, api_key):
        self.service = discovery.build('commentanalyzer', 'v1alpha1', developerKey=api_key)
    
    def detect_toxicity(self, text):
        analyze_request = {
            'comment': {'text': text},
            'requestedAttributes': {'TOXICITY': {}}
        }
        
        response = self.service.comments().analyze(body=analyze_request).execute()
        
        if 'attributeScores' in response:
            toxicity_score = response['attributeScores']['TOXICITY']['summaryScore']['value']
            return toxicity_score
        else:
            return None

# Example usage
api_key = "YOUR_GOOGLE_API_KEY"
detector = ToxicLanguageDetector(api_key)
toxicity_score = detector.detect_toxicity("This is a toxic message.")
print("Toxicity Score:", toxicity_score)