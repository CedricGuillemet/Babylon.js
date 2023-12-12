/* eslint-disable @typescript-eslint/naming-convention */
import { FlowGraphSceneReadyEventBlock } from "core/FlowGraph/Blocks/Event/flowGraphSceneReadyEventBlock";
import { FlowGraphSceneTickEventBlock } from "core/FlowGraph/Blocks/Event/flowGraphSceneTickEventBlock";
import { FlowGraphConsoleLogBlock } from "core/FlowGraph/Blocks/Execution/flowGraphConsoleLogBlock";
import { FlowGraphTimerBlock } from "core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphTimerBlock";
import { FlowGraphSendCustomEventBlock } from "core/FlowGraph/Blocks/Execution/flowGraphSendCustomEventBlock";
import { FlowGraphReceiveCustomEventBlock } from "core/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock";
import { FlowGraphSequenceBlock } from "core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphSequenceBlock";
import { FlowGraphGetPropertyBlock } from "core/FlowGraph/Blocks/Data/flowGraphGetPropertyBlock";
import { FlowGraphSetPropertyBlock } from "core/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock";
import {
    FlowGraphAddBlock,
    FlowGraphRandomBlock,
    FlowGraphLessThanBlock,
    FlowGraphMultiplyBlock,
    FlowGraphSubtractBlock,
    FlowGraphDotBlock,
    FlowGraphEBlock,
    FlowGraphPiBlock,
    FlowGraphInfBlock,
    FlowGraphNaNBlock,
    FlowGraphAbsBlock,
    FlowGraphSignBlock,
    FlowGraphTruncBlock,
    FlowGraphFloorBlock,
    FlowGraphCeilBlock,
    FlowGraphFractBlock,
    FlowGraphNegBlock,
    FlowGraphDivideBlock,
    FlowGraphRemainderBlock,
    FlowGraphMinBlock,
    FlowGraphMaxBlock,
    FlowGraphClampBlock,
    FlowGraphSaturateBlock,
    FlowGraphInterpolateBlock,
    FlowGraphEqBlock,
    FlowGraphLessThanOrEqualBlock,
    FlowGraphGreaterThanBlock,
    FlowGraphGreaterThanOrEqualBlock,
    FlowGraphIsNanBlock,
    FlowGraphIsInfBlock,
    FlowGraphDegToRadBlock,
    FlowGraphRadToDegBlock,
    FlowGraphSinBlock,
    FlowGraphCosBlock,
    FlowGraphTanBlock,
    FlowGraphAsinBlock,
    FlowGraphAcosBlock,
    FlowGraphAtanBlock,
    FlowGraphAtan2Block,
    FlowGraphSinhBlock,
    FlowGraphCoshBlock,
    FlowGraphTanhBlock,
    FlowGraphAsinhBlock,
    FlowGraphAcoshBlock,
    FlowGraphAtanhBlock,
    FlowGraphExpBlock,
    FlowGraphLog2Block,
    FlowGraphLogBlock,
    FlowGraphLog10Block,
    FlowGraphSqrtBlock,
    FlowGraphCubeRootBlock,
    FlowGraphPowBlock,
    FlowGraphLengthBlock,
    FlowGraphNormalizeBlock,
    FlowGraphCrossBlock,
    FlowGraphRotate2DBlock,
    FlowGraphRotate3DBlock,
} from "core/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks";
import { FlowGraphDoNBlock } from "core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphDoNBlock";
import { FlowGraphGetVariableBlock } from "core/FlowGraph/Blocks/Data/flowGraphGetVariableBlock";
import { FlowGraphSetVariableBlock } from "core/FlowGraph/Blocks/Execution/flowGraphSetVariableBlock";
import { FlowGraphWhileLoopBlock } from "core/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWhileLoopBlock";

export const gltfToFlowGraphTypeMap: { [key: string]: string } = {
    "lifecycle/onStart": FlowGraphSceneReadyEventBlock.ClassName,
    "lifecycle/onTick": FlowGraphSceneTickEventBlock.ClassName,
    log: FlowGraphConsoleLogBlock.ClassName,
    "flow/delay": FlowGraphTimerBlock.ClassName,
    "customEvent/send": FlowGraphSendCustomEventBlock.ClassName,
    "customEvent/receive": FlowGraphReceiveCustomEventBlock.ClassName,
    "flow/sequence": FlowGraphSequenceBlock.ClassName,
    "world/get": FlowGraphGetPropertyBlock.ClassName,
    "world/set": FlowGraphSetPropertyBlock.ClassName,
    "flow/doN": FlowGraphDoNBlock.ClassName,
    "variable/get": FlowGraphGetVariableBlock.ClassName,
    "variable/set": FlowGraphSetVariableBlock.ClassName,
    "flow/whileLoop": FlowGraphWhileLoopBlock.ClassName,
    "math/random": FlowGraphRandomBlock.ClassName,
    "math/e": FlowGraphEBlock.ClassName,
    "math/pi": FlowGraphPiBlock.ClassName,
    "math/inf": FlowGraphInfBlock.ClassName,
    "math/nan": FlowGraphNaNBlock.ClassName,
    "math/abs": FlowGraphAbsBlock.ClassName,
    "math/sign": FlowGraphSignBlock.ClassName,
    "math/trunc": FlowGraphTruncBlock.ClassName,
    "math/floor": FlowGraphFloorBlock.ClassName,
    "math/ceil": FlowGraphCeilBlock.ClassName,
    "math/fract": FlowGraphFractBlock.ClassName,
    "math/neg": FlowGraphNegBlock.ClassName,
    "math/add": FlowGraphAddBlock.ClassName,
    "math/sub": FlowGraphSubtractBlock.ClassName,
    "math/mul": FlowGraphMultiplyBlock.ClassName,
    "math/div": FlowGraphDivideBlock.ClassName,
    "math/rem": FlowGraphRemainderBlock.ClassName,
    "math/min": FlowGraphMinBlock.ClassName,
    "math/max": FlowGraphMaxBlock.ClassName,
    "math/clamp": FlowGraphClampBlock.ClassName,
    "math/saturate": FlowGraphSaturateBlock.ClassName,
    "math/mix": FlowGraphInterpolateBlock.ClassName,
    "math/eq": FlowGraphEqBlock.ClassName,
    "math/lt": FlowGraphLessThanBlock.ClassName,
    "math/le": FlowGraphLessThanOrEqualBlock.ClassName,
    "math/gt": FlowGraphGreaterThanBlock.ClassName,
    "math/ge": FlowGraphGreaterThanOrEqualBlock.ClassName,
    "math/isnan": FlowGraphIsNanBlock.ClassName,
    "math/isinf": FlowGraphIsInfBlock.ClassName,
    "math/rad": FlowGraphDegToRadBlock.ClassName,
    "math/deg": FlowGraphRadToDegBlock.ClassName,
    "math/sin": FlowGraphSinBlock.ClassName,
    "math/cos": FlowGraphCosBlock.ClassName,
    "math/tan": FlowGraphTanBlock.ClassName,
    "math/asin": FlowGraphAsinBlock.ClassName,
    "math/acos": FlowGraphAcosBlock.ClassName,
    "math/atan": FlowGraphAtanBlock.ClassName,
    "math/atan2": FlowGraphAtan2Block.ClassName,
    "math/sinh": FlowGraphSinhBlock.ClassName,
    "math/cosh": FlowGraphCoshBlock.ClassName,
    "math/tanh": FlowGraphTanhBlock.ClassName,
    "math/asinh": FlowGraphAsinhBlock.ClassName,
    "math/acosh": FlowGraphAcoshBlock.ClassName,
    "math/atanh": FlowGraphAtanhBlock.ClassName,
    "math/exp": FlowGraphExpBlock.ClassName,
    "math/log": FlowGraphLogBlock.ClassName,
    "math/log2": FlowGraphLog2Block.ClassName,
    "math/log10": FlowGraphLog10Block.ClassName,
    "math/sqrt": FlowGraphSqrtBlock.ClassName,
    "math/cbrt": FlowGraphCubeRootBlock.ClassName,
    "math/pow": FlowGraphPowBlock.ClassName,
    "math/length": FlowGraphLengthBlock.ClassName,
    "math/normalize": FlowGraphNormalizeBlock.ClassName,
    "math/dot": FlowGraphDotBlock.ClassName,
    "math/cross": FlowGraphCrossBlock.ClassName,
    "math/rotate2d": FlowGraphRotate2DBlock.ClassName,
    "math/rotate3d": FlowGraphRotate3DBlock.ClassName,
};

export const gltfTypeToBabylonType: any = {
    float2: "Vector2",
    float3: "Vector3",
    float4: "Vector4",
};
