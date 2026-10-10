import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Sun, Moon, BookOpen, Calculator, Briefcase, TrendingUp, 
  Youtube, FileText, Award, ArrowLeft, CheckCircle, Search, Bookmark, 
  Calendar, Trash2, Plus, Sparkles, ShieldCheck, Check, RotateCcw, Clock
} from 'lucide-react';
import { subjectsData } from './data/curriculum';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // LocalStorage state
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('cp_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [completedChapters, setCompletedChapters] = useState(() => {
    const saved = localStorage.getItem('cp_completed');
    return saved ? JSON.parse(saved) : [];
  });
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('cp_tasks');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Revise Partnership Fundamentals', subject: 'Accountancy', completed: false, dueDate: '2026-10-15' },
      { id: 2, title: 'Solve 5 BST Case Studies on Taylor Principles', subject: 'Business Studies', completed: true, dueDate: '2026-10-12' }
    ];
  });
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState('Accountancy');

  // Quiz state
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Mock test timer state
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [testRunning, setTestRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('cp_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('cp_completed', JSON.stringify(completedChapters));
  }, [completedChapters]);

  useEffect(() => {
    localStorage.setItem('cp_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    let timer;
    if (testRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setTestRunning(false);
      alert('Time is up! Your mock test has been submitted automatically.');
    }
    return () => clearInterval(timer);
  }, [testRunning, timeLeft]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const toggleChapterComplete = (id) => {
    setCompletedChapters(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTaskTitle, subject: newTaskSubject, completed: false, dueDate: new Date().toISOString().split('T')[0] }]);
    setNewTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Collect all practice questions
  const allQuestions = subjectsData.flatMap(s => s.chapters.flatMap(c => c.questions));

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col font-sans transition-colors duration-300">

        {/* Top Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium shadow-inner flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>CommercePath 12: Learn Smart. Practise Better. Score Higher. (CBSE 2026 Target 95%+)</span>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab('overview'); setSelectedSubject(null); setSelectedChapter(null); }}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">CommercePath 12</h1>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">CBSE Class 12 Mastery Hub</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1 font-semibold text-sm">
              <button onClick={() => { setActiveTab('overview'); setSelectedSubject(null); setSelectedChapter(null); }} className={`px-4 py-2 rounded-lg transition ${activeTab === 'overview' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}>Dashboard</button>
              <button onClick={() => { setActiveTab('subjects'); setSelectedSubject(subjectsData[0]); }} className={`px-4 py-2 rounded-lg transition ${activeTab === 'subjects' ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}>Subjects</button>
              <button onClick={() => setActiveTab('videos')} className={`px-4 py-2 rounded-lg transition text-red-600 flex items-center gap-1 ${activeTab === 'videos' ? 'bg-red-50 dark:bg-red-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}><Youtube className="w-4 h-4" /> Video Hub</button>
              <button onClick={() => setActiveTab('quiz')} className={`px-4 py-2 rounded-lg transition text-emerald-600 flex items-center gap-1 ${activeTab === 'quiz' ? 'bg-emerald-50 dark:bg-emerald-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}><Award className="w-4 h-4" /> Practice Engine</button>
              <button onClick={() => setActiveTab('planner')} className={`px-4 py-2 rounded-lg transition text-purple-600 flex items-center gap-1 ${activeTab === 'planner' ? 'bg-purple-50 dark:bg-purple-950/30' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}><Calendar className="w-4 h-4" /> Study Planner</button>
            </nav>

            <div className="flex items-center gap-3">
              <button onClick={toggleDarkMode} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition shadow-sm">
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">

          {/* DASHBOARD TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-950 text-white p-8 sm:p-12 shadow-2xl">
                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5" /> CBSE Class 12 Board Exam 2026
                  </span>
                  <h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Master <span className="bg-gradient-to-r from-indigo-400 to-violet-300 bg-clip-text text-transparent">Commerce Board Exams</span></h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">No login required. Access NCERT chapter notes, PW & Xylem video masterclasses, formula sheets, and chapter-wise practice tests.</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button onClick={() => { setActiveTab('subjects'); setSelectedSubject(subjectsData[0]); }} className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg transition">Explore Subjects &rarr;</button>
                    <button onClick={() => setActiveTab('quiz')} className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition">Start Practice Engine</button>
                  </div>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase"><span>Completed Chapters</span><CheckCircle className="w-4 h-4 text-emerald-500" /></div>
                  <div className="text-3xl font-black">{completedChapters.length} / {subjectsData.reduce((acc, s) => acc + s.chapters.length, 0)}</div>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase"><span>Bookmarked Items</span><Bookmark className="w-4 h-4 text-amber-500" /></div>
                  <div className="text-3xl font-black">{bookmarks.length}</div>
                </div>
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase"><span>Planner Tasks</span><Calendar className="w-4 h-4 text-purple-500" /></div>
                  <div className="text-3xl font-black">{tasks.filter(t => t.completed).length} / {tasks.length}</div>
                </div>
              </div>

              {/* Subject Selection Grid */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black">Choose a Subject</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {subjectsData.map(subject => (
                    <div key={subject.id} onClick={() => { setSelectedSubject(subject); setActiveTab('subjects'); }} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition cursor-pointer space-y-4 group shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">{subject.badge}</span>
                        <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition" />
                      </div>
                      <h4 className="text-xl font-extrabold">{subject.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{subject.description}</p>
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">Open Curriculum &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SUBJECTS & CHAPTERS TAB */}
          {activeTab === 'subjects' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                {subjectsData.map(sub => (
                  <button key={sub.id} onClick={() => { setSelectedSubject(sub); setSelectedChapter(null); }} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition ${selectedSubject?.id === sub.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    {sub.name}
                  </button>
                ))}
              </div>

              {selectedSubject && !selectedChapter && (
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-900 to-purple-950 text-white shadow-xl space-y-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold uppercase">{selectedSubject.badge}</span>
                    <h2 className="text-3xl font-black">{selectedSubject.name}</h2>
                    <p className="text-sm text-slate-300">{selectedSubject.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black">Chapter Curriculum</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedSubject.chapters.map(chap => {
                        const isDone = completedChapters.includes(chap.id);
                        return (
                          <div key={chap.id} onClick={() => setSelectedChapter(chap)} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{chap.duration}</span>
                                {isDone && <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1"><Check className="w-3 h-3" /> Completed</span>}
                              </div>
                              <h4 className="text-lg font-bold">{chap.title}</h4>
                              <p className="text-xs text-slate-500">{chap.description}</p>
                            </div>
                            <button className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-bold text-xs self-start sm:self-center">Open Chapter &rarr;</button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* DETAILED CHAPTER VIEW */}
              {selectedChapter && (
                <div className="space-y-6">
                  <button onClick={() => setSelectedChapter(null)} className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition">
                    <ArrowLeft className="w-4 h-4" /> Back to Chapters
                  </button>

                  <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300">{selectedChapter.duration}</span>
                      <button onClick={() => toggleChapterComplete(selectedChapter.id)} className={`px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-1 transition ${completedChapters.includes(selectedChapter.id) ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'}`}>
                        <CheckCircle className="w-4 h-4" /> {completedChapters.includes(selectedChapter.id) ? 'Completed' : 'Mark Complete'}
                      </button>
                    </div>
                    <h2 className="text-3xl font-black">{selectedChapter.title}</h2>
                    <p className="text-sm text-slate-300">{selectedChapter.description}</p>
                  </div>

                  {/* Video Lesson */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                    <h3 className="text-xl font-black text-red-600 flex items-center gap-2"><Youtube className="w-5 h-5" /> Video Lecture</h3>
                    <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden shadow-inner">
                      <iframe className="w-full h-full" src={selectedChapter.videos[0].url} title={selectedChapter.videos[0].title} allowFullScreen></iframe>
                    </div>
                  </div>

                  {/* Revision Notes */}
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                    <h3 className="text-xl font-black text-indigo-600 flex items-center gap-2"><FileText className="w-5 h-5" /> Revision Notes & Key Formulas</h3>
                    <h4 className="font-bold text-base">{selectedChapter.notes.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">{selectedChapter.notes.summary}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIDEO HUB TAB */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-r from-red-800 to-rose-950 text-white space-y-2 shadow-xl">
                <span class="px-3 py-1 rounded-full bg-red-500/30 text-red-200 text-xs font-bold uppercase">PW & Xylem Playlists</span>
                <h2 className="text-3xl font-black">Free Video Lecture Vault</h2>
                <p className="text-sm text-slate-300">Watch curated one-shot streams and chapter numerical solutions.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjectsData.flatMap(s => s.chapters).map((chap, i) => (
                  <div key={i} className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
                    <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden">
                      <iframe className="w-full h-full" src={chap.videos[0].url} title={chap.videos[0].title} allowFullScreen></iframe>
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-red-600">{chap.videos[0].channel}</span>
                      <h4 className="font-bold text-sm">{chap.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PRACTICE QUIZ & MOCK TEST TAB */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-950 text-white space-y-2 shadow-xl">
                <h2 className="text-3xl font-black">Board Exam Practice Engine</h2>
                <p className="text-sm text-slate-200">Interactive MCQs and 30-minute timed practice tests with instant scoring.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto space-y-6 shadow-md">
                {!testRunning && (
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-bold text-slate-500">Question {quizIdx + 1} of {allQuestions.filter(q => q.type === 'mcq').length}</span>
                    <button onClick={() => setTestRunning(true)} className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center gap-1"><Clock className="w-4 h-4" /> Start 30-Min Timed Test</button>
                  </div>
                )}

                {testRunning && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-bold text-center flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 animate-spin" /> Time Remaining: {formatTime(timeLeft)}
                  </div>
                )}

                {!quizCompleted ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">{allQuestions.filter(q => q.type === 'mcq')[quizIdx]?.question}</h3>
                    <div className="space-y-2">
                      {allQuestions.filter(q => q.type === 'mcq')[quizIdx]?.options.map((opt, i) => (
                        <button key={i} onClick={() => setSelectedOption(i)} className={`w-full text-left p-3.5 rounded-xl border transition text-sm font-medium ${selectedOption === i ? 'bg-indigo-600 text-white border-indigo-600' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    {selectedOption !== null && (
                      <div className="pt-2">
                        <button onClick={() => {
                          if (selectedOption === allQuestions.filter(q => q.type === 'mcq')[quizIdx].correct) setScore(score + 1);
                          if (quizIdx + 1 < allQuestions.filter(q => q.type === 'mcq').length) {
                            setQuizIdx(quizIdx + 1);
                            setSelectedOption(null);
                          } else {
                            setQuizCompleted(true);
                          }
                        }} className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition">Submit Answer</button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 space-y-4">
                    <h3 className="text-2xl font-black text-emerald-600">🎉 Practice Set Complete!</h3>
                    <p className="text-sm">You scored {score} out of {allQuestions.filter(q => q.type === 'mcq').length}</p>
                    <button onClick={() => { setQuizIdx(0); setScore(0); setSelectedOption(null); setQuizCompleted(false); }} className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl text-xs flex items-center gap-1 mx-auto"><RotateCcw className="w-4 h-4" /> Retake Test</button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STUDY PLANNER TAB */}
          {activeTab === 'planner' && (
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-800 to-indigo-950 text-white space-y-2 shadow-xl">
                <h2 className="text-3xl font-black">Personal Study Planner</h2>
                <p class="text-sm text-slate-300">Set daily board revision targets saved directly in your browser.</p>
              </div>

              <form onSubmit={addTask} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 shadow-sm">
                <input type="text" placeholder="Enter task title (e.g. Solve Cash Flow numericals)..." value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} className="flex-grow p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <select value={newTaskSubject} onChange={(e) => setNewTaskSubject(e.target.value)} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none">
                  <option value="Accountancy">Accountancy</option>
                  <option value="Business Studies">Business Studies</option>
                  <option value="Economics">Economics</option>
                </select>
                <button type="submit" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1 transition"><Plus className="w-4 h-4" /> Add Task</button>
              </form>

              <div className="space-y-3">
                {tasks.map(task => (
                  <div key={task.id} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm">
                    <div className="flex items-center gap-3">
                      <button onClick={() => toggleTask(task.id)} className={`w-6 h-6 rounded-lg flex items-center justify-center border transition ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-700'}`}>
                        {task.completed && <Check className="w-4 h-4" />}
                      </button>
                      <span className={`text-sm font-semibold ${task.completed ? 'line-through text-slate-400' : ''}`}>{task.title}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold">{task.subject}</span>
                    </div>
                    <button onClick={() => deleteTask(task.id)} className="text-slate-400 hover:text-red-500 transition"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 mt-12">
          © 2026 CommercePath 12. Built for CBSE Class 12 Commerce Students.
        </footer>
      </div>
    </div>
  );
}