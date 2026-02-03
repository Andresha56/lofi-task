import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import Header from "../components/Header";
import Timer from "../components/Timer";
import TaskTracker from "../components/TaskTracker";
import SoundPlayers from "../components/SoundPlayers";
import Slider from "../components/Slider";
import { StyledApp } from "../styles/App.styled";
import { ImageContainer } from "../styles/ImageContainer.styled";
import { getColors, updateColor, reset } from "../features/colors/colorSlice";
import { CirclePicker, ColorChangeHandler } from "react-color";
import Radio from "../components/Radio";
import { StyledDashboard } from "../styles/Dashboard.styled";
import Spinner from "../components/Spinner";
import { Nav } from "../components/Nav";
import { SketchPicker } from "react-color";
import IconButton from "../components/IconButton";

const Dashboard = () => {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const [volumes, setVolumes] = useState<Record<string, number>>({
    rain: 0.5,
    fire: 0.5,
    wind: 0.5,
    bird: 0.5,
    moon: 0.5,
    coffee: 0.5,
  });

  const handleVolumeChange = (value: number) => {
    if (!activeSound) return;

    setVolumes((prev) => ({
      ...prev,
      [activeSound]: value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);
  const { colors } = useSelector((state: RootState) => state.colors);

  useEffect(() => {
    if (!user) navigate("/login");
    dispatch(getColors());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  const handleOnChange: ColorChangeHandler = (color) => {
    if (color.hex === "#f9f6f2") {
      setShowCustomPicker(true);
      return;
    }
    dispatch(
      updateColor({
        ...colors,
        backgroundColor: color.hex,
        primaryTextColor: color.hex === "#181818" ? "white" : "black",
        secondaryTextColor: color.hex,
      })
    );
  };

  return (
    <>
      <StyledDashboard style={{ display: gifLoaded ? "" : "none" }}>
        <Nav />
        <StyledApp>
          <div className="section first-section">
            <div className="timer-tasktracker-container ">
              <Timer />
              <TaskTracker />
            </div>
          </div>

          <div className="second-section">
            <div className="section middle">
              <div className="section middle image-audio-container">
                <div className="slideshow">
                  <ImageContainer onLoad={() => setGifLoaded(true)}>
                    <img src="lofi_night.gif" alt="" className="art" />
                  </ImageContainer>
                </div>
                <Radio />

              </div>
              <div className="audio-dashboard">
                {activeSound ? (
                  <>
                    <IconButton
                      icon={activeSound}
                      className={"full-opacity"}
                      height={15}
                      width={15}
                      color={"#ffffff"}
                    />

                    <Slider
                      value={volumes[activeSound]}
                      min={0}
                      max={1}
                      step={0.1}
                      onChange={handleVolumeChange}
                      isVertical={true}
                    />
                  </>
                ) : (
                  <p>Select a sound</p>
                )}
              </div>

            </div>
            <div className="section last">
              <div className="relative">
                <div className="color-picker-and-sound-players-container">
                  {showCustomPicker && (
                    <div className="custom-color-picker">
                      <SketchPicker
                        color={colors.backgroundColor}
                        onChangeComplete={(color) => {
                          dispatch(
                            updateColor({
                              ...colors,
                              backgroundColor: color.hex,
                              primaryTextColor: "black",
                              secondaryTextColor: color.hex,
                            })
                          );
                        }}
                      />
                      <button onClick={() => setShowCustomPicker(false)}>Done</button>
                    </div>
                  )}
                  {user && <h2>Welcome back, {user?.name?.toLowerCase() ?? "andresha"}</h2>
                  }
                  <hr className="first" />
                  <CirclePicker
                    color={colors.backgroundColor}
                    colors={[
                      "#a59f87",
                      "#a7b78b",
                      "#d2cddf96",
                      "#B8C1A2",
                      "#b8c2bde9",
                      "#c0e4d2e9",
                    ]}
                    onChange={handleOnChange}
                  />
                  <hr />
                  <SoundPlayers
                    activeSound={activeSound}
                    setActiveSound={setActiveSound}
                    volumes={volumes}
                  />
                </div>
              </div>
            </div>
          </div>
        </StyledApp>
      </StyledDashboard>

      {!gifLoaded && <Spinner />}
    </>
  );
};

export default Dashboard;
