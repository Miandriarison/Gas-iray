import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  MessageSquare, 
  Eye, 
  Calendar,
  MapPin,
  Users,
  DollarSign,
  BookOpen,
  Heart,
  Video
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const InvestorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'EcoTech Solutions',
      category: 'Technologie verte',
      founder: 'Marie Dubois',
      fundingGoal: 500000,
      currentFunding: 325000,
      investors: 45,
      description: 'Solution IoT pour optimiser la consommation énergétique des bâtiments',
      location: 'Paris, France',
      stage: 'Série A',
      featured: true,
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg'
    },
    {
      id: 2,
      title: 'HealthAI',
      category: 'Santé & IA',
      founder: 'Dr. Thomas Martin',
      fundingGoal: 800000,
      currentFunding: 120000,
      investors: 23,
      description: 'Plateforme IA pour le diagnostic médical précoce',
      location: 'Lyon, France',
      stage: 'Seed',
      featured: false,
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg'
    },
    {
      id: 3,
      title: 'FoodChain',
      category: 'FoodTech',
      founder: 'Sophie Laurent',
      fundingGoal: 300000,
      currentFunding: 280000,
      investors: 67,
      description: 'Traçabilité blockchain pour la chaîne alimentaire',
      location: 'Bordeaux, France',
      stage: 'Pré-série A',
      featured: true,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    }
  ];

  const upcomingLives = [
    {
      title: 'Tendances FoodTech 2025',
      host: 'Sophie Laurent',
      date: '2025-01-15',
      time: '14:00',
      attendees: 156,
      category: 'FoodTech'
    },
    {
      title: 'Investir dans l\'IA médicale',
      host: 'Dr. Thomas Martin',
      date: '2025-01-18',
      time: '16:00',
      attendees: 89,
      category: 'HealthTech'
    },
    {
      title: 'Green Tech: Opportunités 2025',
      host: 'Marie Dubois',
      date: '2025-01-20',
      time: '10:00',
      attendees: 234,
      category: 'CleanTech'
    }
  ];

  const favoriteProjects = [
    { name: 'EcoTech Solutions', progress: 65, lastUpdate: '2h' },
    { name: 'FoodChain', progress: 93, lastUpdate: '1j' },
    { name: 'AgriBot Pro', progress: 45, lastUpdate: '3j' }
  ];

  const stats = [
    { label: 'Projets suivis', value: '12', icon: Eye, color: 'blue' },
    { label: 'Investissements', value: '€45,000', icon: DollarSign, color: 'green' },
    { label: 'Messages', value: '8', icon: MessageSquare, color: 'purple' },
    { label: 'Lives regardés', value: '23', icon: Video, color: 'orange' }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Investisseur</h1>
              <p className="text-gray-600 mt-1">Découvrez et investissez dans des projets prometteurs</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline" icon={Filter}>
                Filtres
              </Button>
              <Button icon={Search}>
                Rechercher des projets
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'projects', label: 'Projets', icon: TrendingUp },
              { id: 'messages', label: 'Messagerie', icon: MessageSquare },
              { id: 'content', label: 'Contenus exclusifs', icon: BookOpen },
              { id: 'lives', label: 'Lives', icon: Video },
              { id: 'favorites', label: 'Favoris', icon: Heart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'projects' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Search and Filters */}
            <Card>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Rechercher des projets par nom, secteur, fondateur..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Tous les secteurs</option>
                    <option>Technologie</option>
                    <option>Santé</option>
                    <option>FinTech</option>
                    <option>E-commerce</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Tous les stades</option>
                    <option>Seed</option>
                    <option>Série A</option>
                    <option>Série B</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Projets en vedette</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.featured).map((project) => (
                  <Card key={project.id} hover className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-400 text-yellow-900 text-xs font-medium px-2 py-1 rounded-full">
                          En vedette
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                        <span className="text-sm text-gray-500">{project.stage}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                        <Users className="w-4 h-4 ml-2" />
                        <span>{project.investors} investisseurs</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Financement</span>
                          <span className="font-medium">
                            €{project.currentFunding.toLocaleString()} / €{project.fundingGoal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor((project.currentFunding / project.fundingGoal) * 100)}`}
                            style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Voir détails
                        </Button>
                        <Button variant="outline" size="sm" icon={MessageSquare}>
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Projects */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Tous les projets</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project.id} hover className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-yellow-400 text-yellow-900 text-xs font-medium px-2 py-1 rounded-full">
                            En vedette
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                          <Heart className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                        <span className="text-sm text-gray-500">{project.stage}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                        <Users className="w-4 h-4 ml-2" />
                        <span>{project.investors} investisseurs</span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Financement</span>
                          <span className="font-medium">
                            €{project.currentFunding.toLocaleString()} / €{project.fundingGoal.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor((project.currentFunding / project.fundingGoal) * 100)}`}
                            style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Voir détails
                        </Button>
                        <Button variant="outline" size="sm" icon={MessageSquare}>
                          Contacter
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lives' && (
          <div className="space-y-8">
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Lives à venir</h2>
              <div className="space-y-4">
                {upcomingLives.map((live, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Video className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-gray-900">{live.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                          {live.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">par {live.host}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(live.date).toLocaleDateString('fr-FR')} à {live.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{live.attendees} inscrits</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Rappel
                      </Button>
                      <Button size="sm">
                        S'inscrire
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'favorites' && (
          <div className="space-y-8">
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Mes projets favoris</h2>
              <div className="space-y-4">
                {favoriteProjects.map((project, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2">{project.name}</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progression</span>
                            <span className="font-medium">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">Mis à jour il y a {project.lastUpdate}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Voir
                      </Button>
                      <Button variant="ghost" size="sm" icon={Heart} className="text-red-500">
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Other tabs placeholder */}
        {!['projects', 'lives', 'favorites'].includes(activeTab) && (
          <Card className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'messages' && 'Messagerie'}
              {activeTab === 'content' && 'Contenus exclusifs'}
            </h3>
            <p className="text-gray-600">
              Cette section sera développée prochainement.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InvestorDashboard;