using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace geany.dotnet_core
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder builder, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                builder.UseDeveloperExceptionPage();
                Console.WriteLine($"content root dir: {env.ContentRootPath}");
                Console.WriteLine($"web root dir: {env.WebRootPath}");
            }

            builder.UseDefaultFiles(
                new DefaultFilesOptions
                {
                    RequestPath = string.Empty,
                    DefaultFileNames = new List<string> { "index.html" },
                    FileProvider = env.WebRootFileProvider
                });
            
            builder.UseStaticFiles(
                new StaticFileOptions
                {
                    RequestPath = string.Empty,
                    FileProvider = env.WebRootFileProvider
                });

            builder.UseMvc();
        }
    }
}
