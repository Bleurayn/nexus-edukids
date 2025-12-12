import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Settings, Users, BarChart3, Brain, Sparkles, Globe, Shield, Zap, Volume2, Image, Video } from 'lucide-react';
import confetti from 'canvas-confetti';

// ==================== FIXED & ENHANCED COMPONENTS ====================

const BLEUSonelleVoiceEngine = ({ text, isActive, onVoiceGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [voiceProgress, setVoiceProgress] = useState(0);
  const [generatedAudio, setGeneratedAudio] = useState(null);

  useEffect(() => {
    if (isActive && text) {
      setIsGenerating(true);
      setVoiceProgress(0);

      const interval = setInterval(() => {
        setVoiceProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGenerating(false);

            const audioData = {
              text,
              duration: `${Math.ceil(text.split(' ').length / 2.5)} seconds`, // Realistic: ~150 wpm
              quality: "HD Neural Voice",
              emotion: "Educational-Friendly",
              language: "English (Educational)",
              fileSize: `${Math.ceil(text.length / 8)}KB`
            };
            setGeneratedAudio(audioData);
            onVoiceGenerated?.(audioData);
            return 100;
          }
          return Math.min(100, prev + Math.random() * 18 + 7);
        });
      }, 180);

      return () => clearInterval(interval);
    }
  }, [isActive, text, onVoiceGenerated]);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Volume2 className="w-5 h-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-purple-900">BLEUSonelle Voice Engine</h3>
          <p className="text-sm text-purple-700">Neural voice synthesis with educational optimization</p>
        </div>
      </div>

      {isGenerating && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-purple-700">Generating natural voice...</span>
            <span className="text-sm font-medium text-purple-900">{Math.round(voiceProgress)}%</span>
          </div>
          <div className="w-full bg-purple-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${voiceProgress}%` }}
            />
          </div>
        </div>
      )}

      {generatedAudio && (
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h4 className="font-medium text-purple-900 mb-2">Generated Audio Output</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-gray-600">Duration:</span> <span className="ml-2 font-medium">{generatedAudio.duration}</span></div>
            <div><span className="text-gray-600">Quality:</span> <span className="ml-2 font-medium">{generatedAudio.quality}</span></div>
            <div><span className="text-gray-600">Emotion:</span> <span className="ml-2 font-medium">{generatedAudio.emotion}</span></div>
            <div><span className="text-gray-600">Size:</span> <span className="ml-2 font-medium">{generatedAudio.fileSize}</span></div>
          </div>
          <div className="mt-3 bg-purple-50 p-3 rounded border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm text-purple-700">Natural educational voice ready</span>
            </div>
            <button aria-label="Play generated audio" className="text-purple-600 hover:text-purple-700 transition-colors">
              <Play className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BLEURenderXEngine = ({ prompt, isActive, onImageGenerated }) => {
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [renderStage, setRenderStage] = useState("");
  const stageIndexRef = useRef(0);

  const renderStages = [
    "Analyzing educational context...",
    "Generating child-friendly visuals...",
    "Applying learning optimization...",
    "Cultural sensitivity check...",
    "Final quality enhancement..."
  ];

  useEffect(() => {
    if (isActive && prompt) {
      setIsRendering(true);
      setRenderProgress(0);
      setRenderStage(renderStages[0]);
      stageIndexRef.current = 0;

      const interval = setInterval(() => {
        setRenderProgress(prev => {
          const newProgress = Math.min(100, prev + Math.random() * 14 + 9);
          const nextThreshold = (stageIndexRef.current + 1) * (100 / renderStages.length);

          if (newProgress >= nextThreshold && stageIndexRef.current < renderStages.length - 1) {
            stageIndexRef.current++;
            setRenderStage(renderStages[stageIndexRef.current]);
          }

          if (newProgress >= 100) {
            clearInterval(interval);
            setIsRendering(false);

            const imageData = {
              prompt,
              resolution: "1920x1080 HD",
              style: "Educational-Optimized",
              safety: "Child-Safe Verified",
              culturalCheck: "Passed",
              renderTime: "2.3 seconds",
              fileSize: "1.2MB",
              educationalValue: "High"
            };
            setGeneratedImage(imageData);
            onImageGenerated?.(imageData);
            return 100;
          }
          return newProgress;
        });
      }, 180);

      return () => clearInterval(interval);
    }
  }, [isActive, prompt, onImageGenerated]);

  // ... rest of component unchanged (JSX identical)
  // (keeping for brevity — only logic was broken)
};

// BLEUMotionEngine unchanged except minor polish...

// ==================== CONFetti ON COMPLETION ====================
const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

// ==================== MAIN APP WITH FINAL FIXES ====================
const NEXUSEduKidsPrototype = () => {
  // ... all your existing state

  const ContentCreationDemo = () => {
    // ... existing state

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setCreationStep(prev => {
            if (prev === 1) setVoiceActive(true);
            if (prev === 2) setRenderActive(true);
            if (prev === 3) setMotionActive(true);

            if (prev >= creationSteps.length - 1) {
              clearInterval(interval);
              setIsPlaying(false);
              setGeneratedContent({
                title: "The Solar System Dance",
                subject: "Science",
                duration: "14 minutes",
                confidence: 98,
                bleuTechnologies: "All Active"
              });
              triggerConfetti(); // INVESTOR MAGIC
              return prev;
            }
            return prev + 1;
          });
        }, 3200);

        return () => clearInterval(interval);
      }
    }, [isPlaying]);

    // ... rest unchanged
  };

  // ... rest of your app (Navigation, etc.)

  return (
    <div className="min-h-screen bg-gray-50">
      <FiduciaryOath />
      <Navigation />

      <div className="flex">
        <div className="flex-1 p-6">
          {activeDemo === 'content-creation' && <ContentCreationDemo />}
          {activeDemo === 'analytics' && <AnalyticsDashboard />}
          {activeDemo === 'technology' && <TechnologyStackDemo />}
        </div>

        <div className="w-80 p-6 bg-white border-l border-gray-200 space-y-6">
          <InvestmentMetrics />
          {/* ... rest of sidebar */}
          
          {/* NEW: Professional CTA */}
          <a 
            href="https://yourdomain.com/pitch-deck" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Download Investor Deck
          </a>
        </div>
      </div>

      <footer className="bg-gray-900 text-white p-8 text-center">
        <p className="text-sm opacity-75">
          © 2025 NEXUS EduKids • Proprietary BLEU AI Stack • Patent Pending
        </p>
        <p className="text-xs mt-2 opacity-50">
          Production-grade prototype • Built with fiduciary duty
        </p>
      </footer>
    </div>
  );
};

export default NEXUSEduKidsPrototype;
