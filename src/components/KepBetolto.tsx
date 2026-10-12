type KepBetoltoProps = {
  kepUrl: string;
  leiras: string;
};

function KepBetolto({ kepUrl, leiras }: KepBetoltoProps) {
  return (
    <img
      className="izzo"
      src={kepUrl}
      alt={leiras}
      width={100}
      height={180}
    />
  );
}

export default KepBetolto;