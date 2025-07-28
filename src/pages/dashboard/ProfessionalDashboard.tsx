import React, { useState } from 'react';
import { 
  BarChart3, 
  Plus, 
  Eye, 
  Users, 
  ShoppingBag, 
  Video, 
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Calendar,
  DollarSign,
  Star
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const ProfessionalDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Vues totales', value: '12,345', change: '+12%', icon: Eye, color: 'blue' },
    { label: 'Abonnés', value: '1,234', change: '+8%', icon: Users, color: 'green' },
    { label: 'Ventes', value: '€8,950', change: '+23%', icon: DollarSign, color: 'purple' },
    { label: 'Lives réalisés', value: '28', change: '+5%', icon: Video, color: 'orange' }
  ];

  const recentActivity = [
    { type: 'sale', message: 'Nouvelle vente: Formation React Advanced', time: '2h', amount: '€299' },
    { type: 'follower', message: 'Sophie Martin a commencé à vous suivre', time: '4h' },
    { type: 'live', message: 'Live "Stratégies de croissance" terminé', time: '1j', viewers: '156' },
    { type: 'message', message: '3 nouveaux messages de prospects', time: '1j' }
  ];

  const upcomingEvents = [
    { title: 'Live: Tendances 2025', date: '2025-01-15', time: '14:00', attendees: 45 },
    { title: 'Formation: SEO Avancé', date: '2025-01-18', time: '10:00', attendees: 23 },
    { title: 'Webinaire: E-commerce', date: '2025-01-22', time: '16:00', attendees: 78 }
  ];

  const topProducts = [
    { name: 'Formation React Pro', sales: 45, revenue: '€13,455', rating: 4.9 },
    { name: 'Consultation 1h', sales: 32, revenue: '€4,800', rating: 4.8 },
    { name: 'E-book Marketing', sales: 89, revenue: '€2,670', rating: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Professionnel</h1>
              <p className="text-gray-600 mt-1">Gérez votre activité et développez votre audience</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button icon={Plus}>
                Nouveau contenu
              </Button>
              <Button variant="outline" icon={Video}>
                Lancer un live
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
              { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
              { id: 'content', label: 'Publications', icon: Plus },
              { id: 'sales', label: 'Ventes', icon: ShoppingBag },
              { id: 'lives', label: 'Lives', icon: Video },
              { id: 'courses', label: 'Formations', icon: GraduationCap },
              { id: 'partners', label: 'Partenaires', icon: Users }
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

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${
                        stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change} vs mois dernier
                      </p>
                    </div>
                    <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
                  <Button variant="ghost" size="sm">Voir tout</Button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'sale' ? 'bg-green-100' :
                        activity.type === 'follower' ? 'bg-blue-100' :
                        activity.type === 'live' ? 'bg-purple-100' : 'bg-orange-100'
                      }`}>
                        {activity.type === 'sale' && <DollarSign className="w-4 h-4 text-green-600" />}
                        {activity.type === 'follower' && <Users className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'live' && <Video className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'message' && <MessageSquare className="w-4 h-4 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-xs text-gray-500">Il y a {activity.time}</span>
                          {activity.amount && (
                            <span className="text-xs font-medium text-green-600">{activity.amount}</span>
                          )}
                          {activity.viewers && (
                            <span className="text-xs text-gray-500">{activity.viewers} spectateurs</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Événements à venir</h3>
                  <Button variant="ghost" size="sm" icon={Plus}>Ajouter</Button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString('fr-FR')} à {event.time}
                        </p>
                        <p className="text-xs text-gray-500">{event.attendees} inscrits</p>
                      </div>
                      <Button variant="outline" size="sm">Gérer</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Top Products */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Produits les plus vendus</h3>
                <Button variant="ghost" size="sm">Voir tous les produits</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Produit</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Ventes</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Revenus</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Note</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topProducts.map((product, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-gray-900">{product.name}</div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{product.sales}</td>
                        <td className="py-3 px-4 font-medium text-green-600">{product.revenue}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{product.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">Modifier</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* Other tabs content would be implemented similarly */}
        {activeTab !== 'overview' && (
          <Card className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'content' && 'Gestion des publications'}
              {activeTab === 'sales' && 'Gestion des ventes'}
              {activeTab === 'lives' && 'Gestion des lives'}
              {activeTab === 'courses' && 'Gestion des formations'}
              {activeTab === 'partners' && 'Gestion des partenaires'}
            </h3>
            <p className="text-gray-600 mb-6">
              Cette section sera développée pour gérer vos {activeTab}.
            </p>
            <Button icon={Plus}>
              Créer un nouveau contenu
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfessionalDashboard;