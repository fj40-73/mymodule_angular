<div ng-app="myApp">
  <div ng-controller="Ctrl1">
    <h1>Hello {{data.user.name}}!</h1>
    <dl>
      <dt>Email:</dt><dd>{{data.user.mail}}</dd>
      <dt>Joined:</dt><dd>{{data.user.created | unixtime | date:'medium'}}</dd>
      <dt>Last Access:</dt><dd>{{data.user.access | unixtime | date:'medium'}}</dd>
      <dt>Timezone:</dt><dd>{{data.user.timezone}}</dd>
    </dl>
  </div>
  <!-- zippy example
  <script type="text/ng-template" id="zippy.html">
  <div>
  <h3 ng-click="toggleContent()">{{title}}</h3>
  <div ng-show="isContentVisible" ng-transclude></div>
</div>
  </script>
  -->
  
  <input type="text" ng-model="model.title">
  <input type="text" ng-model="model.content">
  <zippy title="{{model.title}}">
    The content is: {{model.content}}
  </zippy>
</div>