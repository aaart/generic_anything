using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace geany.dotnet_core.Common
{
    public class ServiceResponse<T>
    {
        public T Data { get; set; }
    }
}
