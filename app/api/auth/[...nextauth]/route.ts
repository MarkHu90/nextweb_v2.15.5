import NextAuth from "next-auth/next";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
      tenantId: process.env.AZURE_AD_TENANT_ID ?? "",
      authorization: {
        url: "https://login.microsoftonline.com/ddd3d26c-b197-4d00-a32d-1ffd84c0c295/oauth2/v2.0/authorize?response_mode=query&response_type=token",
        params: {
          scope: "openid email profile user.read offline_access",
        },
      },
      token: "https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token",
    }),
  ],
});

export { handler as GET, handler as POST };
