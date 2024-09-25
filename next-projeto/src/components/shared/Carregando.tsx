import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default async function Carregando(props: { quantidade: number }) {
    function skeleton() {
        return (
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                    <Skeleton count={1} height={90} width={90} />
                    <div className="flex-1 flex flex-col gap-1.5">
                        <Skeleton count={1} height={20} containerClassName="flex-1" />
                        <Skeleton count={1} height={20} containerClassName="flex-1 w-1/3" />
                        <Skeleton count={1} height={20} containerClassName="flex-1 w-1/5" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-6">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <span>Carregando...</span>
                {Array.from({ length: props.quantidade }).map((_, index) => (
                    <div key={index}>{skeleton()}</div>
                ))}
            </SkeletonTheme>
        </div>
    )
}
