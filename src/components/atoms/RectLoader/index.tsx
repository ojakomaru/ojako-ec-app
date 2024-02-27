import ContentLoader from 'react-content-loader';
import type { IContentLoaderProps } from 'react-content-loader';

// プレースホルダーの幅と高さを追加するProps
interface RectLoaderProps extends IContentLoaderProps {
  width: number;
  height: number;
}

/**
 * レクトローダー
 * @description コンテンツの読み込み時に表示するプレースホルダーのコンポーネント
 */
const RectLoader = ({ width, height, ...rest }: RectLoaderProps) => (
  <ContentLoader
    speed={2} // アニメーション速度を二秒に
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`} // SVGの表示領域
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...rest}
  >
    <rect x="0" y="0" rx="0" ry="0" width={width} height={height} />
  </ContentLoader>
);

export default RectLoader;
