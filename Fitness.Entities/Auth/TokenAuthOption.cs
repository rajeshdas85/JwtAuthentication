using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Fitness.Entities.Auth
{
    public class TokenAuthOption
    {
        public static string Audience { get; } = "FitnessAppAudience";
        public static string Issuer { get; } = "FitnessAppIssuer";
        public static RsaSecurityKey Key { get; } = new RsaSecurityKey(RSAKeyHelper.GenerateKey());
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.RsaSha256Signature);

        public static TimeSpan ExpiresSpan { get; } = TimeSpan.FromMinutes(1);
        public static string TokenType { get; } = "Bearer";
    }
}
