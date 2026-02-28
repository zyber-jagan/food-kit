import { useState } from 'react';
import { Send, Search, User, MoreVertical, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState(1);
    const [message, setMessage] = useState('');

    // Mock Chats
    const chats = [
        { id: 1, name: 'Alice (Consumer)', lastMessage: 'Is the curry still available?', time: '10:30 AM', unread: 2 },
        { id: 2, name: 'Bob (Consumer)', lastMessage: 'Thank you for the bread!', time: 'Yesterday', unread: 0 },
    ];

    // Mock Messages
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi, I saw your post about the homemade curry.', sender: 'Alice', type: 'received', time: '10:28 AM' },
        { id: 2, text: 'Is it still available for pickup?', sender: 'Alice', type: 'received', time: '10:30 AM' },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        setMessages([...messages, { id: messages.length + 1, text: message, sender: 'Me', type: 'sent', time: 'Now' }]);
        setMessage('');
    };

    return (
        <PageTransition>
            <div className="max-w-7xl mx-auto p-4 h-[calc(100vh-4rem)]">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-full md:w-80 border-r border-slate-100 flex flex-col">
                        <div className="p-4 border-b border-slate-100">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {chats.map(chat => (
                                <div
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat.id)}
                                    className={`p-4 flex items-start gap-3 cursor-pointer hover:bg-slate-50 transition-colors ${selectedChat === chat.id ? 'bg-primary/5 border-r-2 border-primary' : ''}`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                                        <User className="w-5 h-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="font-semibold text-slate-900 truncate">{chat.name}</h3>
                                            <span className="text-xs text-slate-400 flex-shrink-0">{chat.time}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
                                    </div>
                                    {chat.unread > 0 && (
                                        <div className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-1">
                                            {chat.unread}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="hidden md:flex flex-1 flex-col bg-slate-50/50">
                        {/* Header */}
                        <div className="p-4 bg-white border-b border-slate-100 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                    A
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Alice (Consumer)</h3>
                                    <p className="text-xs text-green-500 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                                    <Phone className="w-5 h-5" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                                    <MoreVertical className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[70%] p-3 rounded-2xl ${msg.type === 'sent'
                                        ? 'bg-primary text-white rounded-br-none'
                                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                                        } shadow-sm`}>
                                        <p className="text-sm">{msg.text}</p>
                                        <p className={`text-[10px] mt-1 text-right ${msg.type === 'sent' ? 'text-primary-100' : 'text-slate-400'}`}>
                                            {msg.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <form onSubmit={handleSend} className="flex gap-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 hover:bg-white transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="p-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Chat;
