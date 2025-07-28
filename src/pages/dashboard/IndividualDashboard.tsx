import React, { useState } from 'react';
import { 
  ShoppingBag, 
  GraduationCap, 
  Video, 
  Star, 
  Clock, 
  User,
  PlayCircle,
  BookOpen,
  Award,
  Heart,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const IndividualDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Formations suivies', value: '5', icon: GraduationCap, color: 'blue' },
    { label: 'Achats effectués', value: '12', icon: ShoppingBag, color: 'green' },
    { label: 'Lives regardés', value: '18', icon: Video, color: 'purple' },
    { label: 'Certificats obtenus', value: '3', icon: Award, color: 'orange' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Formation React Avancé',
      instructor: 'Marie Dubois',
      progress: 75,
      duration: '8h 30min',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
      nextLesson: 'Hooks avancés',
      totalLessons: 24,
      completedLessons: 18
    },
    {
      id: 2,
      title: 'Marketing Digital 2025',
      instructor: 'Pierre Martin',
      progress: 40,
      duration: '12h 15min',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      nextLesson: 'SEO moderne',
      totalLessons: 32,
      completedLessons: 13
    },
    {
      id: 3,
      title: 'E-commerce Stratégies',
      instructor: 'Sophie Laurent',
      progress: 90,
      duration: '6h 45min',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      nextLesson: 'Optimisation conversions',
      totalLessons: 18,
      completedLessons: 16
    }
  ];

  const products = [
    {
      id: 1,
      name: 'E-book SEO 2025',
      price: '€29',
      seller: 'Expert Marketing',
      rating: 4.7,
      reviews: 124,
      image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg',
      category: 'E-books'
    },
    {
      id: 2,
      name: 'Template Site Web Pro',
      price: '€89',
      seller: 'WebDesign Pro',
      rating: 4.8,
      reviews: 87,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      category: 'Templates'
    },
    {
      id: 3,
      name: 'Formation privée 1h',
      price: '€150',
      seller: 'Marie Dubois',
      rating: 5.0,
      reviews: 45,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      category: 'Consultations'
    }
  ];

  const upcomingLives = [
    {
      title: 'Tendances UX/UI 2025',
      host: 'Design Expert',
      date: '2025-01-15',
      time: '14:00',
      attendees: 234,
      category: 'Design',
      isLive: false
    },
    {
      title: 'Crypto & Blockchain',
      host: 'Crypto Analyst',
      date: '2025-01-16',
      time: '18:00',
      attendees: 456,
      category: 'Finance',
      isLive: true
    },
    {
      title: 'Entrepreneuriat féminin',
      host: 'Business Leader',
      date: '2025-01-18',
      time: '10:00',
      attendees: 178,
      category: 'Business',
      isLive: false
    }
  ];

  const recentPurchases = [
    { name: 'Formation JavaScript', date: '2025-01-10', price: '€199', status: 'Accès accordé' },
    { name: 'E-book Marketing', date: '2025-01-08', price: '€29', status: 'Téléchargé' },
    { name: 'Template React', date: '2025-01-05', price: '€79', status: 'Téléchargé' }
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
              <h1 className="text-2xl font-bold text-gray-900">Mon espace d'apprentissage</h1>
              <p className="text-gray-600 mt-1">Continuez votre parcours de formation et découvrez de nouveaux contenus</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline" icon={Video}>
                Lives en cours
              </Button>
              <Button icon={ShoppingBag}>
                Boutique
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
              { id: 'overview', label: 'Vue d\'ensemble', icon: TrendingUp },
              { id: 'courses', label: 'Mes formations', icon: GraduationCap },
              { id: 'shop', label: 'Boutique', icon: ShoppingBag },
              { id: 'lives', label: 'Lives', icon: Video },
              { id: 'purchases', label: 'Mes achats', icon: User }
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

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Continue Learning */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Continuer l'apprentissage</h3>
                <div className="space-y-4">
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{course.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">par {course.instructor}</p>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-500">Progression</span>
                              <span className="font-medium">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full ${getProgressColor(course.progress)}`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">Prochain: {course.nextLesson}</p>
                      </div>
                      <Button size="sm" icon={PlayCircle}>
                        Continuer
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Upcoming Lives */}
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Lives à venir</h3>
                <div className="space-y-4">
                  {upcomingLives.slice(0, 3).map((live, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        live.isLive ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        <Video className={`w-5 h-5 ${live.isLive ? 'text-red-600' : 'text-blue-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900 text-sm">{live.title}</h4>
                          {live.isLive && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                              LIVE
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">par {live.host}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(live.date).toLocaleDateString('fr-FR')} à {live.time}
                        </p>
                      </div>
                      <Button size="sm" variant={live.isLive ? 'primary' : 'outline'}>
                        {live.isLive ? 'Rejoindre' : 'S\'inscrire'}
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Recent Purchases */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Achats récents</h3>
                <Button variant="ghost" size="sm">Voir tout</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Produit</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Prix</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPurchases.map((purchase, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{purchase.name}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {new Date(purchase.date).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4 font-medium text-green-600">{purchase.price}</td>
                        <td className="py-3 px-4">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {purchase.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} hover className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="bg-white/90 px-2 py-1 rounded-full text-xs font-medium">
                        {course.progress}% terminé
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">par {course.instructor}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Progression</span>
                        <span className="font-medium">
                          {course.completedLessons}/{course.totalLessons} leçons
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">
                      Prochain: {course.nextLesson}
                    </p>

                    <Button fullWidth icon={PlayCircle}>
                      Continuer la formation
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'shop' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} hover className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">par {product.seller}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} avis)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <Button>
                        Acheter
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {!['overview', 'courses', 'shop'].includes(activeTab) && (
          <Card className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'lives' && 'Lives et événements'}
              {activeTab === 'purchases' && 'Historique des achats'}
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

export default IndividualDashboard;