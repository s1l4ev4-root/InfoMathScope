import "./Preloader.scss";

interface Props {
  progress: number;
}

export function Preloader({ progress }: Props) {
  //   const [progress, setProgress] = useState(0);
  //   const [isHiding, setIsHiding] = useState(false);
  //   const [isUnmounted, setIsUnmounted] = useState(false);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setProgress((prev) => {
  //         if (prev >= 100) {
  //           clearInterval(interval);

  //           setTimeout(() => setIsHiding(true), 300);

  //           setTimeout(() => setIsUnmounted(true), 1100);

  //           return 100;
  //         }
  //         return prev + 1;
  //       });
  //     }, 30);

  //     return () => clearInterval(interval);
  //   }, []);

  //   if (isUnmounted) return null;

  return (
    <div className="preloader">
      <div
        className="preloader__title"
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      >
        <h1 className="preloader__title-outline">математика</h1>
        <h1 className="preloader__title-fill">математика</h1>

        <span className="preloader__dot preloader__dot--1" />
        <span className="preloader__dot preloader__dot--2" />
        <span className="preloader__dot preloader__dot--3" />
      </div>

      <div className="preloader__progress">{progress}%</div>
    </div>
  );
}
