import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Calendar, MessageCircle, Heart, Users, Newspaper, BookOpen, CalendarDays, User, PhoneCall, MailIcon } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Mock data
  const services = [
    {
      id: 1,
      title: "Cardiologie",
      description: "Diagnostic et traitement des maladies cardiovasculaires",
      icon: "❤️",
      image: "https://placehold.co/400x250/16a34a/ffffff?text=Cardiologie"
    },
    {
      id: 2,
      title: "Pédiatrie",
      description: "Soins médicaux spécialisés pour les enfants",
      icon: "👶",
      image: "https://placehold.co/400x250/fbbf24/ffffff?text=Pédiatrie"
    },
    {
      id: 3,
      title: "Chirurgie",
      description: "Interventions chirurgicales de toutes spécialités",
      icon: "🔪",
      image: "https://placehold.co/400x250/16a34a/ffffff?text=Chirurgie"
    },
    {
      id: 4,
      title: "Radiologie",
      description: "Imagerie médicale avancée et diagnostics",
      icon: "📸",
      image: "https://placehold.co/400x250/fbbf24/ffffff?text=Radiologie"
    }
  ];

  const doctors = [
    { name: "Dr. Marie Dubois", specialty: "Cardiologie", days: ["Lundi", "Mercredi", "Vendredi"], hours: "8h-16h" },
    { name: "Dr. Jean Martin", specialty: "Pédiatrie", days: ["Mardi", "Jeudi"], hours: "9h-17h" },
    { name: "Dr. Sophie Laurent", specialty: "Chirurgie", days: ["Lundi", "Mardi", "Jeudi"], hours: "8h-15h" },
    { name: "Dr. Pierre Moreau", specialty: "Radiologie", days: ["Mercredi", "Vendredi"], hours: "9h-16h" }
  ];

  const news = [
    { id: 1, title: "Nouveau service de télémédecine lancé", date: "15 mars 2024", excerpt: "L'hôpital lance un nouveau service de consultation à distance..." },
    { id: 2, title: "Journée de vaccination gratuite", date: "10 mars 2024", excerpt: "Venez vous faire vacciner gratuitement contre la grippe..." },
    { id: 3, title: "Extension des horaires d'urgence", date: "5 mars 2024", excerpt: "Les services d'urgence sont désormais ouverts 24h/24..." }
  ];

  const communityServices = [
    "Campagnes de dépistage gratuit",
    "Ateliers de santé communautaires",
    "Programmes de prévention",
    "Soutien aux personnes âgées",
    "Éducation sanitaire"
  ];

  // Chatbot responses
  const chatbotResponses = {
    "bonjour": "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    "rdv": "Pour prendre un rendez-vous, vous pouvez utiliser notre formulaire de réservation ou appeler le +221 33 889 90 90.",
    "urgence": "En cas d'urgence, rendez-vous directement aux urgences ou appelez le 15.",
    "horaires": "Nos horaires d'ouverture sont de 8h à 18h du lundi au vendredi.",
    "services": "Nous proposons des services en cardiologie, pédiatrie, chirurgie, radiologie et bien plus encore.",
    "default": "Je suis un assistant virtuel de l'hôpital. Pour des questions spécifiques, veuillez contacter notre service client au +221 33 889 90 90."
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = { text: newMessage, sender: 'user' };
    setChatMessages(prev => [...prev, userMessage]);
    
    // Generate bot response
    const lowerMessage = newMessage.toLowerCase();
    let botResponse = chatbotResponses.default;
    
    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut')) {
      botResponse = chatbotResponses.bonjour;
    } else if (lowerMessage.includes('rendez') || lowerMessage.includes('rdv') || lowerMessage.includes('reservation')) {
      botResponse = chatbotResponses.rdv;
    } else if (lowerMessage.includes('urgence') || lowerMessage.includes('urgence')) {
      botResponse = chatbotResponses.urgence;
    } else if (lowerMessage.includes('horaire') || lowerMessage.includes('ouvert')) {
      botResponse = chatbotResponses.horaires;
    } else if (lowerMessage.includes('service')) {
      botResponse = chatbotResponses.services;
    }
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
    
    setNewMessage('');
  };

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section with banner image */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://placehold.co/1920x600/16a34a/ffffff?text=Hôpital+Moderne')" }}
        ></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Centre de Sante de Bignona</h1>
            <p className="text-xl mb-8">Votre santé, notre priorité absolue</p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActivePage('appointment')}
                className="bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Prendre un rendez-vous
              </button>
              <button 
                onClick={() => setActivePage('services')}
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors"
              >
                Nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mot du Directeur</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
            <div className="flex items-start mb-6">
              <img 
                src="https://placehold.co/100x100/16a34a/ffffff?text=Dr.+Director" 
                alt="Directeur" 
                className="w-20 h-20 rounded-full mr-6 border-2 border-green-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Dr. X</h3>
                <p className="text-green-600 font-medium">Directeur</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Chers patients et visiteurs, bienvenue à l'Hôpital de la Place. Depuis notre création, nous nous engageons 
              à fournir des soins de qualité supérieure dans un environnement chaleureux et professionnel. Notre équipe 
              médicale dévouée travaille sans relâche pour assurer votre bien-être et votre guérison. Nous avons récemment 
              investi dans de nouvelles technologies médicales et formé notre personnel aux dernières pratiques cliniques 
              pour vous offrir les meilleurs soins possibles. Votre confiance est notre plus grande récompense.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Nos Services Principaux</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-green-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Nos Services Médicaux</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-green-100">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact & Service à la Communauté</h1>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Téléphone</h3>
                <p className="text-gray-600">+221 33 889 90 90</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@hopitalplace.sn</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Adresse</h3>
                <p className="text-gray-600">123 Avenue Emile BADIANE, Bignona, Sénégal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Horaires</h3>
                <p className="text-gray-600">Lundi - Vendredi: 8h - 17h</p>
                <p className="text-gray-600">Samedi: 8h - 12h</p>
              </div>
            </div>
          </div>

          {/* Community Services */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Service à la Communauté</h2>
            <ul className="space-y-3">
              {communityServices.map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Nom complet</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Sujet</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Information générale</option>
                <option>Rendez-vous</option>
                <option>Urgence</option>
                <option>Service communautaire</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const NewsPage = () => (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Actualités</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-green-100">
            <div className="h-48 bg-gradient-to-r from-green-500 to-yellow-500"></div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.excerpt}</p>
              <button className="mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors">
                Lire la suite →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MediathequePage = () => (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Médiathèque</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-green-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ressources Éducatives</h2>
            <p className="text-gray-600 mb-6">
              Accédez à notre collection de ressources médicales, guides de santé, 
              vidéos éducatives et documents informatifs pour mieux comprendre 
              votre santé et les soins médicaux.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="text-green-600" size={20} />
                <span className="text-gray-700">Guides de santé</span>
              </div>
              <div className="flex items-center space-x-3">
                <VideoIcon className="text-green-600" size={20} />
                <span className="text-gray-700">Vidéos éducatives</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileTextIcon className="text-green-600" size={20} />
                <span className="text-gray-700">Documents médicaux</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-green-600" size={20} />
                <span className="text-gray-700">Ateliers en ligne</span>
              </div>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Accès aux Ressources</h3>
            <p className="text-gray-600 mb-6">
              Toutes nos ressources sont accessibles gratuitement aux patients 
              et à la communauté. Contactez notre service de documentation 
              pour plus d'informations.
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Accéder à la médiathèque
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AppointmentPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      doctor: '',
      date: '',
      time: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Votre rendez-vous a été réservé avec succès !');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        doctor: '',
        date: '',
        time: ''
      });
    };

    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">Prendre un Rendez-vous</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Doctor Availability */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Disponibilité des Médecins</h2>
            <div className="space-y-6">
              {doctors.map((doctor, index) => (
                <div key={index} className="border-b border-green-100 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-green-600 text-sm mb-2">{doctor.specialty}</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <CalendarDays className="w-4 h-4 mr-2 text-green-600" />
                    <span>{doctor.days.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-green-600" />
                    <span>{doctor.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nom complet *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Téléphone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Service *</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map(service => (
                    <option key={service.id} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Médecin *</label>
                <select 
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez un médecin</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor.name}>{doctor.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Date *</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Heure *</label>
                  <input 
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Réserver le rendez-vous
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage />;
      case 'services': return <ServicesPage />;
      case 'contact': return <ContactPage />;
      case 'news': return <NewsPage />;
      case 'mediatheque': return <MediathequePage />;
      case 'appointment': return <AppointmentPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Heart className="text-green-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">Hôpital de la Place</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'services', label: 'Services' },
                { id: 'news', label: 'Actualités' },
                { id: 'mediatheque', label: 'Médiathèque' },
                { id: 'contact', label: 'Contact' },
                { id: 'appointment', label: 'Rendez-vous' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`font-medium transition-colors px-3 py-2 rounded-lg ${
                    activePage === item.id 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'services', label: 'Services' },
                { id: 'news', label: 'Actualités' },
                { id: 'mediatheque', label: 'Médiathèque' },
                { id: 'contact', label: 'Contact' },
                { id: 'appointment', label: 'Rendez-vous' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 font-medium rounded-lg ${
                    activePage === item.id 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        {renderPage()}
      </main>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatbotOpen ? (
          <div className="bg-white rounded-xl shadow-2xl w-80 h-96 flex flex-col border border-green-200">
            <div className="bg-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <MessageCircle size={20} />
                <span className="font-semibold">Assistant IA</span>
              </div>
              <button 
                onClick={() => setChatbotOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-green-50">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.sender === 'user' 
                      ? 'bg-yellow-100 ml-auto border border-yellow-200' 
                      : 'bg-white border border-green-200'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-green-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setChatbotOpen(true)}
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold">Centre de Sante Bignona</h3>
              </div>
              <p className="text-green-200">
                Votre santé, notre priorité absolue depuis 1985.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Services</h4>
              <ul className="space-y-2 text-green-200">
                <li>Cardiologie</li>
                <li>Pédiatrie</li>
                <li>Chirurgie</li>
                <li>Radiologie</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Contact</h4>
              <ul className="space-y-2 text-green-200">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-yellow-300" />
                  +221 33 889 90 90
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-4 h-4 mr-2 text-yellow-300" />
                  contact@hopitalplace.sn
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-300" />
                  Ziguinchor, Sénégal
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-yellow-300">Horaires</h4>
              <ul className="space-y-2 text-green-200">
                <li>Lundi - Vendredi: 8h - 17h</li>
                <li>Samedi: 8h - 12h</li>
                <li>Dimanche: Urgences uniquement</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
            <p>&copy; 2025 Centre de sante BIGNONA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock icons for Mediatheque page
const VideoIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const FileTextIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

export default App;