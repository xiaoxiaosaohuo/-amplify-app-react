/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { item, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="375px"
      height="812px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        width="375px"
        height="222px"
        position="absolute"
        left="0px"
        top="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(239.00000095367432,93.00000205636024,168.0000051856041,1)"
        src={item?.image}
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="36px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="42.1875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        left="86px"
        top="78px"
        padding="0px 0px 0px 0px"
        children={item?.title}
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
