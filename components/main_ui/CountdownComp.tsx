import { Component } from "react";
import Countdown, { CountdownApi } from "react-countdown";
import { useDispatch } from "react-redux";
import { setScoreRef } from "../../redux/slices/tasksSlice";

export default class CountdownApiExample extends Component {
  countdownApi: CountdownApi | null = null;
  state = { date: Date.now() + 10000 };

  componentDidUpdate = () => {};

  handleStartClick = (): void => {
    this.countdownApi && this.countdownApi.start();
  };

  handlePauseClick = (): void => {
    this.countdownApi && this.countdownApi.pause();
  };

  handleResetClick = (): void => {
    this.setState({ date: Date.now() + 10000 });
  };

  handleUpdate = (): void => {
    this.forceUpdate();
  };

  setRef = (countdown: Countdown | null): void => {
    if (countdown) {
      this.countdownApi = countdown.getApi();
    }
  };

  isPaused(): boolean {
    return !!(this.countdownApi && this.countdownApi.isPaused());
  }

  isCompleted(): boolean {
    return !!(this.countdownApi && this.countdownApi.isCompleted());
  }

  render() {
    return (
      <>
        <Countdown
          date={Date.now() + 1000000}
          intervalDelay={0}
          precision={3}
          ref={this.setRef}
          renderer={(props) => (
            <div className={"fond-bold content-center  text-3xl"}>
              {(props.total / 100).toFixed(0)}
            </div>
          )}
        />
      </>
    );
  }
}
