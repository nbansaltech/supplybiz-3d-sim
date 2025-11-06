import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SupplyBizSupplyChainSimulation from './SupplyBizSupplyChainSimulation.jsx';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 flex items-center justify-center p-6">
        <div className="max-w-md mx-auto text-center space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500/20 p-4 rounded-full">
              <svg className="w-16 h-16 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Desktop View Required
          </h1>
          
          <div className="space-y-4 text-gray-200">
            <p className="text-lg font-semibold">
              Dear Viewer,
            </p>
            
            <p className="text-base leading-relaxed">
              This <span className="text-blue-300 font-bold">3D Supply Chain Visualization</span> experience is optimized for desktop screens to provide you with the best interactive experience.
            </p>
            
            <p className="text-base leading-relaxed">
              Please open this website on a <span className="text-green-300 font-bold">desktop or laptop</span> computer to explore the full simulation with:
            </p>
            
            {/* Features List */}
            <div className="bg-white/5 rounded-lg p-4 space-y-2 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚚</span>
                <span className="text-sm">Real-time truck and logistics tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <span className="text-sm">AI-powered route optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span className="text-sm">Interactive 3D warehouse visualization</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-sm">Live performance analytics</span>
              </div>
            </div>

            <p className="text-sm text-gray-400 italic mt-6">
              We appreciate your interest and look forward to showing you the future of supply chain management! ✨
            </p>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-sm text-gray-300">
              Built with <span className="text-red-400 text-lg">❤️</span> by{' '}
              <span className="text-blue-300 font-bold">Nishant Bansal</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <SupplyBizSupplyChainSimulation />
    </div>
  );
}

export default App;

