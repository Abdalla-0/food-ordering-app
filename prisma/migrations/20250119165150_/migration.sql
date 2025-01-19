-- CreateEnum
CREATE TYPE "ProductSizes" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "ExtraIngredients" AS ENUM ('CHEESE', 'BACON', 'TOMATO', 'ONION', 'PEPPER');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "order" SERIAL NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
