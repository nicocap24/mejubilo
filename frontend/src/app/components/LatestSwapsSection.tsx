import React from 'react';

interface Swap {
  id: string;
  type: 'fund' | 'afp';
  from: string;
  to: string;
  date: string;
  user: string;
}

const mockSwaps: Swap[] = [
  {
    id: '1',
    type: 'fund',
    from: 'Fondo A',
    to: 'Fondo B',
    date: '2024-03-20',
    user: 'Juan Pérez'
  },
  {
    id: '2',
    type: 'afp',
    from: 'AFP Modelo',
    to: 'AFP Capital',
    date: '2024-03-19',
    user: 'María González'
  },
  {
    id: '3',
    type: 'fund',
    from: 'Fondo C',
    to: 'Fondo E',
    date: '2024-03-18',
    user: 'Carlos Rodríguez'
  }
];

const LatestSwapsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Últimos Movimientos</h2>
          <p className="text-gray-600">Mira los últimos cambios de fondos y AFP de nuestra comunidad</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {mockSwaps.map((swap) => (
              <div
                key={swap.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-orange-400 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${
                      swap.type === 'fund' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      {swap.type === 'fund' ? (
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {swap.type === 'fund' ? 'Cambio de Fondo' : 'Cambio de AFP'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {swap.from} → {swap.to}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{swap.date}</p>
                    <p className="text-sm text-gray-600">{swap.user}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="text-orange-400 hover:text-orange-500 font-medium">
              Ver todos los movimientos →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSwapsSection; 