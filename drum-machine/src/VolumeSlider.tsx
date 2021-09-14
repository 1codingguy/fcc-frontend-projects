export function VolumeSlider({
  volume, handleVolumeChange, disableVolumeSlider,
}: {
  volume: number;
  handleVolumeChange: ((e: any) => void) | null;
  disableVolumeSlider: boolean;
}) {
  return (
    <div className="volume-slider-container">
      <input
        className="volume-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onChange={(e) => handleVolumeChange && handleVolumeChange(e)}
        disabled={disableVolumeSlider} />
    </div>
  );
}
