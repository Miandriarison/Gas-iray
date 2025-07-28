import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  ShoppingBag, 
  Video, 
  MessageSquare, 
  GraduationCap,
  Briefcase,
  Building,
  User,
  Star,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Mise en relation ciblée',
      description: 'Connectez-vous avec les bons profils selon vos objectifs et votre secteur d\'activité.'
    },
    {
      icon: Video,
      title: 'Lives interactifs',
      description: 'Participez à des sessions live exclusives avec des experts et entrepreneurs.'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce intégré',
      description: 'Vendez et achetez directement sur la plateforme en toute sécurité.'
    },
    {
      icon: GraduationCap,
      title: 'Formations spécialisées',
      description: 'Accédez à des formations premium adaptées à votre niveau et vos besoins.'
    },
    {
      icon: MessageSquare,
      title: 'Messagerie sécurisée',
      description: 'Échangez directement avec vos contacts dans un environnement privé.'
    },
    {
      icon: TrendingUp,
      title: 'Suivi des performances',
      description: 'Analysez vos résultats et optimisez votre présence sur la plateforme.'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Entrepreneure',
      content: 'Gas\'iray m\'a permis de trouver les investisseurs parfaits pour mon projet tech.',
      rating: 5
    },
    {
      name: 'Pierre Martin',
      role: 'Investisseur',
      content: 'Une plateforme exceptionnelle pour découvrir des projets innovants et prometteurs.',
      rating: 5
    },
    {
      name: 'Sophie Laurent',
      role: 'Consultante',
      content: 'Les formations sont de haute qualité et m\'ont aidée à développer mes compétences.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Connectez votre
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
                écosystème entrepreneurial
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              La plateforme premium qui réunit professionnels, investisseurs et particuliers 
              autour de projets d'exception. Accédez à un réseau exclusif via notre système d'abonnement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Découvrir la démo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Paiements sécurisés</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>+10,000 membres</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>4.9/5 satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choisissez votre profil
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque rôle bénéficie d'un accès personnalisé aux fonctionnalités de la plateforme
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Professional Card */}
            <Card hover className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionnel</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Présentez vos projets, vendez vos services, organisez des lives et développez votre réseau professionnel.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Publication de contenus</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">E-commerce intégré</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Live streaming</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Analytics avancés</span>
                </li>
              </ul>
              <Link to="/register?role=professional">
                <Button fullWidth size="lg">
                  Rejoindre en tant que Pro
                </Button>
              </Link>
            </Card>

            {/* Investor Card */}
            <Card hover className="text-center group border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Populaire
                </span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Investisseur</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Découvrez des projets prometteurs, connectez-vous avec des entrepreneurs et accédez à du contenu exclusif.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Accès projets premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Messagerie directe</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lives exclusifs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Contenus privilégiés</span>
                </li>
              </ul>
              <Link to="/register?role=investor">
                <Button fullWidth size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Devenir Investisseur
                </Button>
              </Link>
            </Card>

            {/* Individual Card */}
            <Card hover className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Particulier</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Formez-vous, achetez des produits/services et participez à une communauté dynamique.
              </p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Formations en ligne</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Boutique accessible</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Lives publics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Communauté active</span>
                </li>
              </ul>
              <Link to="/register?role=individual">
                <Button fullWidth size="lg" className="bg-green-600 hover:bg-green-700">
                  Rejoindre la communauté
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une suite complète d'outils pour développer votre activité et vos relations professionnelles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi nous rejoindre ?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Rejoignez une communauté exclusive de professionnels ambitieux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-blue-100">Accédez aux dernières tendances et technologies</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Réseau</h3>
              <p className="text-blue-100">Connectez-vous avec des experts reconnus</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Croissance</h3>
              <p className="text-blue-100">Développez votre activité rapidement</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
              <p className="text-blue-100">Environnement sécurisé et professionnel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ce que disent nos membres
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de notre communauté
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre parcours entrepreneurial ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Rejoignez Gas'iray aujourd'hui et accédez à un écosystème premium 
            dédié à votre réussite professionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl">
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;