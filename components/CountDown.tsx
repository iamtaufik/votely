import moment from 'moment';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { CountdownRenderer } from './CountDownRenderer';

interface Props {
  start: string;
  end: string;
  currentState: string;
}

const STATE_NOT_STARTED = 'STATE_NOT_STARTED',
  STATE_STARTED = 'STATE_STARTED',
  STATE_ENDED = 'STATE_ENDED',
  STATE_LOADING = 'STATE_LOADING';

export default function CountDown(props: Props) {
  const countDown: CountdownRendererFn = ({ days, hours, minutes, seconds, completed }) => {
    return <CountdownRenderer days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  };

  return (
    <div className="mt-4 text-center ">
      {/* Timer */}

      {props.currentState === STATE_LOADING && <>Tunggu Sebentar...</>}
      {props.currentState === STATE_NOT_STARTED && (
        <div>
          <p>Voting Akan Dimulai pada : </p>
          <Countdown date={props.start} renderer={countDown} />
        </div>
      )}
      {props.currentState === STATE_ENDED && <span className="px-3 py-1 text-lg font-medium ">Voting Telah Berakhir</span>}
      {props.currentState === STATE_STARTED && (
        <div>
          <span>Voting Sedang Berlangsung :</span>
          <Countdown date={props.end} renderer={countDown} />
        </div>
      )}

      {/* End Timer */}
    </div>
  );
}
