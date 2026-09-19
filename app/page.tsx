import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white p-4">
      <div className="max-w-4xl mx-auto space-y-8 py-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">🎮 SMASH Tournament Tracker</h1>
          <p className="text-xl text-gray-300">
            Créez et gérez vos tournois Super Smash Bros. Ultimate
          </p>
        </div>

        {/* Boutons */}
        <div className="flex gap-4 justify-center">
          <Link
            href="/tournaments/new"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition"
          >
            ➕ Nouveau Tournoi
          </Link>
          <Link
            href="/tournaments"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold text-lg transition"
          >
            📋 Mes Tournois
          </Link>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">🎯 Brackets Auto</h2>
            <p className="text-gray-400">Génération automatique de brackets (Round Robin ou Double Élimination)</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">📊 Classement Live</h2>
            <p className="text-gray-400">Mise à jour du classement après chaque match</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">🏆 Historique</h2>
            <p className="text-gray-400">Conservez vos tournois et vos stats de joueurs</p>
          </div>
        </div>

      </div>
    </div>
  )
}