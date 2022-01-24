/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Item } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardC from "./CardC";
import { Collection } from "@aws-amplify/ui-react";
export default function CardCCollection(props) {
  const { item, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Item,
        }).items;
  return (
    <Collection
      type="grid"
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <CardC
          item={item}
          height="auto"
          width="auto"
          margin="0 16px 0 0"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.CardC[0]")}
        ></CardC>
      )}
    </Collection>
  );
}
