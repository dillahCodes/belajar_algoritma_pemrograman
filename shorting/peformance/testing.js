export default function measureAlgorithm(algFn, ...args) {
  const startMemory = process.memoryUsage().rss;
  const startTime = performance.now();

  // Jalankan fungsi algoritma Anda dengan argumen
  algFn(...args);

  const endTime = performance.now();
  const endMemory = process.memoryUsage().rss;

  const elapsedTime = endTime - startTime;
  const usedMemoryB = endMemory - startMemory;
  const usedMemoryMB = usedMemoryB / 1024;

  console.log(`Waktu: ${elapsedTime} ms`);
  console.log(`MemoriByte: ${usedMemoryB} bytes`);
  console.log(`MemoriMB: ${usedMemoryMB} MB`);
}
