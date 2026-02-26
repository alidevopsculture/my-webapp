
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Minus, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, TECH_STACK } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Ali's virtual assistant. Ask me anything about his DevOps expertise, projects, or creative hobbies!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `
        You are "Ask Ali", the AI assistant for Ali Murtaza's professional DevOps portfolio.
        Ali's Profile:
        - Role: DevOps Engineer specializing in Cloud & Automation.
        - Location: Bangalore & Lucknow, India.
        - Skills: ${SKILLS.map(s => `${s.name} (${s.level})`).join(', ')}.
        - Tech Stack: ${TECH_STACK.join(', ')}.
        - Key Projects: ${PROJECTS.map(p => p.title).join(', ')}.
        - Personality: Professional, technical, yet helpful and minimalist.
        
        Rules:
        1. Be concise and professional.
        2. Answer questions about Ali's work, skills, and contact info (connect.alimurtaza@gmail.com).
        3. If asked about things outside his profession/hobbies, politely redirect to his expertise.
        4. Mention that he is looking for remote DevOps roles.
        5. Use a friendly but efficient tone.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that. Please try again or contact Ali directly!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Connectivity issue. Please check back later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickQuestions = [
    "What's your AWS experience?",
    "Tell me about your K8s project",
    "How can I hire you?"
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Chat Toggle Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden"
        >
          <img 
            src="https://raw.githubusercontent.com/alidevopsculture/portfolio/main/ali.jpg" 
            alt="Ask Ali" 
            className="w-full h-full object-cover opacity-0 group-hover:opacity-20 absolute inset-0 transition-opacity"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <MessageSquare className="relative z-10" size={24} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 border-2 border-white rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="bg-slate-900 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-slate-800">
                <img src="img/home/CEO-pic 2.PNG" alt="Ali" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Ask Ali</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  Ali is Online
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors p-1"><Minus size={18} /></button>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors p-1"><X size={18} /></button>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3 rounded-[1.5rem] text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-[1.5rem] rounded-tl-none border border-slate-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="animate-spin text-slate-400" size={16} />
                  <span className="text-slate-400 text-xs font-medium">Ali is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          {messages.length < 3 && !isTyping && (
            <div className="px-6 pb-2 flex flex-wrap gap-2">
              {quickQuestions.map(q => (
                <button 
                  key={q}
                  onClick={() => { setInput(q); }}
                  className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 pt-2 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Message Ali..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-slate-900 transition-all text-sm pr-12"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-3 p-2 text-slate-400 hover:text-slate-900 disabled:opacity-30 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-center text-[9px] text-slate-400 mt-4 uppercase tracking-[0.2em] flex items-center justify-center space-x-1">
              <Sparkles size={10} />
              <span>AI powered by Gemini</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
