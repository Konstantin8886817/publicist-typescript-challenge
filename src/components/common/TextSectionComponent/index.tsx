import { default as Content } from '../../../mocks/content.json';
import { ErrorBoundary } from './ErrorBoundary';
import { NodeType } from '../../../utils/types';
import NodeComponent from '../NodeComponent';

interface Props {
    id: string;
}

function Root(props: any) {
    return props.nodes.map((node: NodeType, index: number) => {
        return <NodeComponent node={node} key={index} />;
    });
}

export function TextSection({ id }: Props) {
    const nodes: any = (Content as any)[id];

    return (
        <ErrorBoundary id={id}>
            <Root id={id} nodes={nodes} />
        </ErrorBoundary>
    );
}
