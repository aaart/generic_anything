using geany.dotnet_core.Infrastructure.MVC;
using Microsoft.AspNetCore.Mvc;

namespace geany.dotnet_core.Controllers
{
    [Produces("application/json")]
    [Route("api/About")]
    public class AboutController : ApiController
    {

    }
}