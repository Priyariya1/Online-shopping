-- CreateTable
CREATE TABLE "Signup" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Signup_name_key" ON "Signup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Signup_email_key" ON "Signup"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Signup_password_key" ON "Signup"("password");
