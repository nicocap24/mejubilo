export const AFP_OPTIONS = [
  { value: 'capital', label: 'Capital' },
  { value: 'cuprum', label: 'Cuprum' },
  { value: 'habitat', label: 'Habitat' },
  { value: 'modelo', label: 'Modelo' },
  { value: 'planvital', label: 'PlanVital' },
  { value: 'provida', label: 'ProVida' },
  { value: 'uno', label: 'Uno' }
];

export const FONDO_OPTIONS = [
  { value: 'A', label: 'Fondo A' },
  { value: 'B', label: 'Fondo B' },
  { value: 'C', label: 'Fondo C' },
  { value: 'D', label: 'Fondo D' },
  { value: 'E', label: 'Fondo E' }
];

export const FORM_FIELDS = [
  {
    id: 'nombre',
    name: 'nombre',
    label: 'Nombre completo',
    type: 'text',
    placeholder: 'Ingresa tu nombre completo'
  },
  {
    id: 'afp',
    name: 'afp',
    label: '',
    type: 'select',
    options: AFP_OPTIONS,
    placeholder: 'Elige tu AFP'
  },
  {
    id: 'fondo',
    name: 'fondo',
    label: '',
    type: 'select',
    options: FONDO_OPTIONS,
    placeholder: 'Elige tu fondo'
  },
  {
    id: 'saldo',
    name: 'saldo',
    label: 'Saldo actual',
    type: 'number',
    placeholder: 'Ingresa tu saldo actual'
  },
  {
    id: 'fechaNacimiento',
    name: 'fechaNacimiento',
    label: 'Fecha de nacimiento',
    type: 'date'
  },
  {
    id: 'email',
    name: 'email',
    label: 'Correo electrónico',
    type: 'email',
    placeholder: 'Ingresa tu correo electrónico'
  }
]; 