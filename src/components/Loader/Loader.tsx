import { ScaleLoader } from 'react-spinners';

type LoaderProps = {
  loading: boolean;
};

const Loader = ({ loading }: LoaderProps) => {
  return (
    <ScaleLoader
      color='#dda0dd'
      cssOverride={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
      height={20}
      margin={4}
      radius={10}
      speedMultiplier={1}
      width={40}
      loading={loading}
    />
  );
};

export default Loader;
