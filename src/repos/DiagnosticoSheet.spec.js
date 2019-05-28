import DiagnosticoSheet from './DiagnosticoSheet';

test('Teste da api do google', async () => {
  await DiagnosticoSheet.listarDiagnosticos('Curingas');
  expect(1).toBe(1);
});
