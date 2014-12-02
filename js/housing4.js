var title = "Figure 4: Mix-adjusted House Price Index by UK countries from January 2004 to May 2014";
var subtitle = "Index level (Feb 2002=100)";
var units = "";
var yAxisTitle = "Index Value";

var data = [];
data[0] = [134.9,133.8,134.0,140.0,141.3,144.1,147.0,148.6,148.3,149.3,149.1,148.0,147.5,146.9,150.0,148.4,148.8,150.0,151.6,151.5,151.8,150.4,151.2,151.1,152.8,150.8,153.8,155.1,156.6,157.0,159.6,161.5,162.8,162.0,163.0,164.4,167.7,166.9,168.8,170.2,171.6,174.3,177.7,178.5,179.2,179.2,178.4,177.8,180.8,177.4,177.5,178.1,176.9,175.2,175.3,170.4,170.2,166.1,163.0,159.4,159.5,155.3,153.0,153.8,153.9,156.5,160.4,160.4,163.3,162.5,163.8,164.2,170.0,167.5,168.5,170.2,171.3,173.0,174.6,175.0,174.0,171.3,171.0,169.9,171.0,167.7,169.7,169.3,167.6,169.4,171.7,172.3,171.8,170.8,170.4,169.9,172.4,169.6,169.2,172.1,172.0,173.9,175.8,176.0,175.0,173.7,174.6,175.7,176.4,173.1,174.3,176.9,177.3,179.6,182.3,183.0,182.2,183.6,184.4,185.8,188.8,189.8,189.1,195.3,196.9];
data[1] = [147.0,150.8,148.0,156.6,163.3,165.3,172.9,177.0,173.6,175.0,176.5,178.5,178.4,178.2,180.7,181.4,185.9,183.3,186.0,188.7,186.2,188.9,186.6,187.7,188.7,189.0,190.2,192.6,194.8,198.7,199.5,202.0,205.3,201.7,205.6,204.7,207.2,209.2,208.7,209.3,211.4,213.8,214.8,217.8,218.0,221.6,218.0,216.8,222.1,216.1,217.3,214.1,213.1,211.7,210.3,205.8,206.8,204.7,197.2,194.5,198.8,190.3,189.0,184.1,190.2,185.9,193.7,195.2,192.9,192.7,198.1,196.4,201.3,203.0,204.4,200.3,205.4,210.9,205.9,205.9,209.8,200.7,204.4,203.2,197.5,196.8,198.0,197.3,192.6,198.7,205.8,204.9,202.3,199.7,200.8,199.4,197.3,196.8,198.8,195.3,199.4,199.4,206.3,208.0,205.5,205.2,202.4,204.2,199.3,204.8,201.3,207.4,200.8,207.9,205.1,211.8,209.8,209.5,213.4,214.1,213.3,215.8,211.0,214.4,213.9];
data[2] = [142.7,136.1,139.6,145.9,151.7,152.1,155.7,157.4,159.0,160.0,160.1,156.9,159.9,157.1,162.1,166.8,169.6,173.4,174.4,175.0,175.1,173.6,173.4,174.0,176.3,174.9,179.5,179.7,186.1,188.8,190.8,197.3,197.7,197.1,196.6,200.5,204.2,203.9,206.1,211.4,215.2,218.2,222.0,223.1,222.3,225.2,224.6,222.8,224.0,222.9,225.2,229.1,227.9,230.6,226.8,222.6,220.6,215.8,216.2,209.5,210.0,203.4,203.1,209.5,211.9,214.2,217.2,221.1,218.7,217.5,221.9,217.4,224.9,211.2,217.8,214.6,220.9,222.1,225.4,222.3,221.7,218.0,216.5,218.0,216.1,209.5,215.0,213.0,213.9,217.5,221.8,218.8,214.8,215.4,214.9,207.9,214.1,212.3,214.3,212.3,211.4,216.2,219.9,220.2,216.7,210.5,212.6,214.4,213.2,209.9,210.6,209.7,213.0,214.2,215.8,220.1,215.0,217.6,218.1,215.5,216.0,214.9,212.3,219.8,220.7];
data[3] = [124.4,123.9,123.9,128.6,132.4,128.1,133.4,136.6,135.4,139.5,134.5,140.3,144.1,138.1,143.5,142.4,144.7,146.3,154.6,152.9,158.0,154.8,158.1,158.4,161.2,160.1,163.7,167.3,170.7,174.1,186.5,193.6,195.3,205.6,216.9,221.6,232.0,237.8,245.8,258.1,261.2,271.4,275.6,281.5,278.8,276.7,255.1,249.4,252.4,249.0,242.8,252.0,241.6,245.9,247.0,231.2,234.6,222.0,215.7,204.9,216.9,202.4,203.6,195.0,185.4,189.4,194.0,201.9,191.7,190.0,193.1,192.6,187.2,182.8,189.5,178.8,185.3,174.8,164.0,167.5,177.1,172.8,170.6,161.8,160.2,162.4,161.9,151.6,158.7,160.3,157.1,159.8,156.3,151.8,150.3,148.1,148.2,147.6,144.5,139.5,142.7,141.7,141.0,139.5,140.6,134.2,137.9,139.6,139.5,136.4,141.6,138.5,145.4,141.1,143.4,141.0,139.3,140.9,142.6,146.4,143.4,140.3,142.1,142.0,144.4];
//set mon to -1 to ignore
var startMon = 1; // keep this as base 1 to match years eg Sept is month 9
//interval to skip in the xAxis category
var interval = 12;
var year = 2004;

var seriesNames = [ 'England', 'Wales', 'Scotland', 'Northern Ireland'];

$(document).ready(function(){

  populateCategories();

  options.yAxis.min = null;
  options.legend.enabled = true;
  
  options.series = [
    {
      name: seriesNames[0],
      data: data[0],
      marker:{
        symbol:"circle",
        states: {
          hover: {
            fillColor: '#007dc3',
            radiusPlus: 0,
            lineWidthPlus: 0
          }
        }
      },
      dashStyle: 'Solid',
    },
      {
        name: seriesNames[1],
        data: data[1],
        marker:{
          symbol:"square",
          states: {
            hover: {
              fillColor: '#409ed2',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdash'
      },
      {
        name:seriesNames[2],
        data: data[2],
        marker:{
          symbol:"diamond",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      },
      {
        name: seriesNames[3],
        data: data[3],
        marker:{
          symbol:"triangle",
          states: {
            hover: {
              fillColor: '#7fbee1',
              radiusPlus: 0,
              lineWidthPlus: 0
            }
          }
        },
        dashStyle: 'shortdot'
      }
  ];

  
  initLineChart();

});



