import { useCommonState } from "@/store/useCommonState";

const LoadingWidget = () => {
  const isWidgetLoading = useCommonState((state) => state.isWidgetLoading);

  if (!isWidgetLoading) return;

  return (
    <div className="absolute inset-0 flex items-center justify-center loading-overlay">
      <div className="loading-widget w-20 h-20"></div>
    </div>
  );
};

export default LoadingWidget;
