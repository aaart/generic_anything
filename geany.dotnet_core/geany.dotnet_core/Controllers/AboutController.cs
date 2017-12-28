using geany.dotnet_core.Infrastructure.MVC;
using Microsoft.AspNetCore.Mvc;
using System;

namespace geany.dotnet_core.Controllers
{
    [Produces("application/json")]
    [Route("api/About")]
    public class AboutController : ApiController
    {
        public DateTime Now() => DateTime.Now;

        public void Exception() => throw new Exception("Always exception.");
    }
}