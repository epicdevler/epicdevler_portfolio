'use client'
import { Box, Button, Center, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { create } from "motion/react-client";

export const MotionGridItem = create(GridItem)
export const MotionBox = create(Box)
export const MotionCenter = create(Center)
export const MotionVStack = create(VStack)
export const MotionHStack = create(HStack)
export const MotionText = create(Text)
export const MotionButton = create(Button)