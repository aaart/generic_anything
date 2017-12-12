using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.FileProviders;

namespace kestrelhost
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string contentRoot = args.FirstOrDefault() ?? Directory.GetCurrentDirectory();
            WebHost.CreateDefaultBuilder()
                .CaptureStartupErrors(true)
                .UseSetting(WebHostDefaults.DetailedErrorsKey, "true")
                .UseUrls("http://*:5050")
                .UseContentRoot(contentRoot)
                .UseKestrel()
                .UseEnvironment("Development")
                .Configure(builder =>
                {
                    var appDirProvider = new PhysicalFileProvider($"{contentRoot}");

                    builder.UseDefaultFiles(new DefaultFilesOptions
                    {
                        RequestPath = string.Empty,
                        DefaultFileNames = new List<string> { "\\wwwroot\\index.html" },
                        FileProvider = appDirProvider
                    });

                    var opts = new StaticFileOptions
                    {
                        RequestPath = string.Empty,
                        FileProvider = new PhysicalFileProvider($"{contentRoot}\\wwwroot\\")
                    };
                    builder.UseStaticFiles(opts);

                    opts = new StaticFileOptions
                    {
                        RequestPath = "",
                        FileProvider = appDirProvider
                    };
                    builder.UseStaticFiles(opts);

                })
                .Build()
                .Run();
        }
    }
}
