'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';

type OutputMode = 'transparent' | 'green';

const solidGreen = { r: 0, g: 255, b: 0 };

export default function GreenScreenRemover() {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sensitivity, setSensitivity] = useState(30);
  const [outputMode, setOutputMode] = useState<OutputMode>('transparent');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const processImage = () => {
    if (!image || !canvasRef.current) return;

    setIsProcessing(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    if (!ctx) {
      setIsProcessing(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const red = data[i];
        const green = data[i + 1];
        const blue = data[i + 2];
        const greenDominance = green - Math.max(red, blue);

        if (greenDominance > sensitivity) {
          if (outputMode === 'transparent') {
            data[i + 3] = 0;
          } else {
            data[i] = solidGreen.r;
            data[i + 1] = solidGreen.g;
            data[i + 2] = solidGreen.b;
            data[i + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setProcessedImage(canvas.toDataURL('image/png'));
      setIsProcessing(false);
    };

    img.src = image;
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.download = outputMode === 'green' ? 'green-screen-export.png' : 'background-removed.png';
    link.href = processedImage;
    link.click();
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-12">
      <section className="text-center">
        <Link
          href="/tools"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-white/5 px-4 py-2 text-sm text-[color:var(--text-muted)] transition hover:text-white"
        >
          Back to Tools
        </Link>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Background Remover + Green Screen Export</h1>
        <p className="mt-4 text-lg text-[color:var(--text-muted)]">
          Remove green backgrounds, export transparent PNGs, or replace keyed areas with a flat chroma-green plate for AMVs.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[34px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-8 backdrop-blur-sm">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {!image ? (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-[30px] border-2 border-dashed border-emerald-300/25 bg-white/5 p-12 text-center transition-all hover:border-emerald-300/45 hover:bg-emerald-400/5"
            >
              <svg
                className="mx-auto mb-4 h-14 w-14 text-emerald-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="text-lg font-semibold text-white">Upload an image</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">PNG, JPG, or WEBP. Best results come from clean green-screen shots.</p>
            </button>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Original</p>
                  <div className="overflow-hidden rounded-[26px] border border-[color:var(--border-color)] bg-black/20">
                    <img src={image} alt="Original" className="w-full" />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-white">Processed</p>
                  <div className="overflow-hidden rounded-[26px] border border-[color:var(--border-color)] bg-black/20">
                    {processedImage ? (
                      outputMode === 'transparent' ? (
                        <div
                          className="w-full"
                          style={{
                            backgroundImage:
                              'repeating-conic-gradient(#606060 0% 25%, transparent 0% 50%)',
                            backgroundSize: '20px 20px',
                          }}
                        >
                          <img src={processedImage} alt="Processed" className="w-full" />
                        </div>
                      ) : (
                        <img src={processedImage} alt="Processed" className="w-full" />
                      )
                    ) : (
                      <div className="flex min-h-[260px] items-center justify-center px-6 text-center text-[color:var(--text-muted)]">
                        Processed preview appears here after export.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/8 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">Output Mode</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <button
                    onClick={() => setOutputMode('transparent')}
                    className={`rounded-[24px] border px-4 py-4 text-left transition ${
                      outputMode === 'transparent'
                        ? 'border-emerald-300/35 bg-emerald-400/10 text-white'
                        : 'border-white/8 bg-black/10 text-[color:var(--text-muted)]'
                    }`}
                  >
                    <p className="font-semibold">Transparent PNG</p>
                    <p className="mt-1 text-sm">Removes the green area and leaves it transparent.</p>
                  </button>
                  <button
                    onClick={() => setOutputMode('green')}
                    className={`rounded-[24px] border px-4 py-4 text-left transition ${
                      outputMode === 'green'
                        ? 'border-emerald-300/35 bg-emerald-400/10 text-white'
                        : 'border-white/8 bg-black/10 text-[color:var(--text-muted)]'
                    }`}
                  >
                    <p className="font-semibold">Green Screen Plate</p>
                    <p className="mt-1 text-sm">Replaces keyed areas with a flat green fill for post-production.</p>
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Sensitivity: {sensitivity}</label>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={sensitivity}
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full accent-emerald-400"
                />
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  Increase sensitivity to remove more green spill. Lower it to preserve edge detail.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={processImage}
                  disabled={isProcessing}
                  className="flex-1 rounded-full border border-emerald-300/20 bg-[linear-gradient(135deg,#1faa67,#35f2a1)] px-6 py-3 text-sm font-semibold text-[#04210f] shadow-[0_12px_28px_rgba(53,242,161,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : outputMode === 'transparent' ? 'Remove Background' : 'Make Green Screen'}
                </button>

                {processedImage && (
                  <button
                    onClick={downloadImage}
                    className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300/45"
                  >
                    Download PNG
                  </button>
                )}

                <button
                  onClick={() => {
                    setImage(null);
                    setProcessedImage(null);
                  }}
                  className="rounded-full border border-[color:var(--border-color)] bg-white/5 px-6 py-3 text-sm font-semibold text-[color:var(--text-muted)] transition hover:text-white"
                >
                  Clear
                </button>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </div>

        <div className="space-y-6">
          <div className="rounded-[34px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-7">
            <h2 className="text-2xl font-semibold text-white">AMV Use Cases</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[color:var(--text-muted)]">
              <p>Use transparent mode for character cutouts, title overlays, and scene accents.</p>
              <p>Use green export mode when you want to composite quickly in editors that handle chroma keying better than alpha layers.</p>
              <p>Run several exports with different sensitivities if your source has glow, motion blur, or green spill around hair and effects.</p>
            </div>
          </div>

          <div className="rounded-[34px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-7">
            <h3 className="text-xl font-semibold text-white">How it works</h3>
            <ol className="mt-5 space-y-3 text-sm text-[color:var(--text-muted)]">
              <li>1. Upload an image with a green background.</li>
              <li>2. Pick transparent export or chroma-green replacement.</li>
              <li>3. Adjust sensitivity until the preview edge looks clean.</li>
              <li>4. Export the PNG and use it in your edit workflow.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
