/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Item } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type CardCProps = React.PropsWithChildren<Partial<FlexProps> & {
    item?: Item;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function CardC(props: CardCProps): React.ReactElement;
