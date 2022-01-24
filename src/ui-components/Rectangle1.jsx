/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function Rectangle1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="375px"
      height="104px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="375px"
        height="104px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(93.00000205636024,95.00000193715096,239.00000095367432,1)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
    </View>
  );
}
