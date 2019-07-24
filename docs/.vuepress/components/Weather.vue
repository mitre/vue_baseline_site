<template lang="html">
  <div>

  <h1> {{this.$page.title}} </h1>

   <vs-table
     max-items="10"
     pagination
     search 
     :data="controls">
    <template slot="header">

</template>
      <template slot="thead">
  <vs-th id="a">Title</vs-th>
  <vs-th id="b" sort-key="impact">Impact</vs-th>
</template>

      <template slot-scope="{data}">
  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
    <vs-td id="b" :data="data[indextr].title">{{data[indextr].title}}</vs-td>

    <vs-td id="a" :data="data[indextr].impact">{{data[indextr].impact}}</vs-td>
    <template class="expand-user" slot="expand">
      <vs-list>
        <vs-tr id="a">{{data[indextr].desc}}</vs-tr>

        <vs-tr id="d" v-if="data[indextr].tags.nist !==undefined">{{data[indextr].tags.nist}}</vs-tr>
        <vs-tr id="d" v-if="data[indextr].tags.cci !==undefined">{{data[indextr].tags.cci}}</vs-tr>

        <vs-tr
          id="d"
          v-if="data[indextr].tags.severity !==undefined"
        >{{data[indextr].tags.severity}}</vs-tr>
        <vs-tr
          id="d"
          v-if="data[indextr].tags.cis_level !==undefined"
        >{{data[indextr].tags.cis_level}}</vs-tr>
        <vs-td >
          <prism language="ruby">{{data[indextr].code}}</prism>
        </vs-td>
      </vs-list>
    </template>
  </vs-tr>
</template>
 </vs-table>
  </div>
</template>

<script>
import "prismjs";
import Prism from "vue-prism-component";
import "prismjs/components/prism-ruby";
import "prismjs/themes/prism.css";

import nginx_profile from "../assets/nginx-baseline.json";
import redhat6_stig from "../assets/disa-rhel6-stig-baseline.json";
import oracle12c_stig from "../assets/oracle-database-12c-stig-baseline.json";
import rsa_archer6 from "../assets/rsa-archer-security-configuration-guide-baseline.json";
import microsoft_sql_server_2014_database from "../assets/microsoft-sql-2014-database-stig-baseline.json";
import apache_tomcat_8 from "../assets/cis-apache-tomcat-benchmark8.json";
import cis_aws_foundations from "../assets/cis-aws-foundations-baseline.json";
import ubuntu_stig from "../assets/stig-canonical-ubuntu-16.04-lts-baseline.json";
import microsoft_sql_server_2014_instance from "../assets/microsoft-sql-server-2014-instance-stig-baseline.json";
import microsoft_iis_server_stig from "../assets/microsoft-iis-8.5-server-stig-baseline.json";
import microsoft_iis_site_stig from "../assets/microsoft-iis-8.5-site-stig-baseline.json";
import oracle_microsoft_sql_cis from "../assets/Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline.json";
import aws_rds_microsoft_sql_server_2014_stig from "../assets/aws-rds-microsoft-sql-server-2014-stig-baseline";
import cis_docker from "../assets/cis-docker-ce-baseline.json";
import jboss_profile from "../assets/red-hat-jboss-eap-6.3-stig-baseline.json";
import jre8 from "../assets/oracle-java-runtime-environment-8-unix-stig-baseline.json";
import jre7 from "../assets/oracle-java-runtime-environment-7-unix-stig-baseline.json";
import aws_rds_postgres_stig from "../assets/aws-rds-postgres-9-stig-baseline.json";
import microsoft_server_2012r2 from "../assets/microsoft-windows-2012r2-memberserver-stig-baseline.json";
import mongodb_stig from "../assets/mongodb-enterprise-advanced-stig-baseline.json";
import apache_tomcat_7 from "../assets/cis-apache-tomcat-benchmark7.json";
import aws_oracle_microsoft_sql_cis from "../assets/cis-aws-rds-mysql-server-enterprise-v5.7-baseline.json";
import microsoft_server_2016 from "../assets/stig-microsoft-windows-server-2016-v1r4-baseline.json";
import aws_s3 from "../assets/aws-s3-baseline.json";
import cis_kubernetes from "../assets/cis-kubernetes-benchmark.json"
import aws_rds_infrastructure from "../assets/cis-aws-rds-infrastructure-baseline.json"

export default {
  components: {
    Prism
  },
  computed: {
    controls() {
 
      if (this.$page.title == "nginx-baseline"){
      return nginx_profile.controls;
      }
      if (this.$page.title == "red-hat-enterprise-linux-6-stig-baseline"){
      return redhat6_stig.controls;
      }
      if (this.$page.title == "oracle-database-12c-stig-baseline"){
      return oracle12c_stig.controls;
      }
      if (this.$page.title == "rsa-archer-6-security-configuration-guide-baseline"){
      return rsa_archer6.controls;
      }
      if (this.$page.title == "microsoft-sql-server-2014-database-stig-baseline"){
      return microsoft_sql_server_2014_database.controls;
      }
      if (this.$page.title == "cis-apache-tomcat-benchmark-8"){
      return apache_tomcat_8.controls;
      }
      if (this.$page.title == "cis-aws-foundations-baseline"){
      return cis_aws_foundations.controls;
      }
      if (this.$page.title == "stig-canonical-ubuntu-16.04-lts-baseline"){
      return ubuntu_stig.controls;
      }
      if (this.$page.title == "microsoft-sql-server-2014-instance-stig-baseline"){
      return microsoft_sql_server_2014_instance.controls;
      }
      if (this.$page.title == "microsoft-iis-8.5-server-stig-baseline"){
      return microsoft_iis_server_stig.controls;
      }
      if (this.$page.title == "microsoft-iis-8.5-site-stig-baseline"){
      return microsoft_iis_site_stig.controls;
      }
      if (this.$page.title == "Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline"){
      return oracle_microsoft_sql_cis.controls;
      }
      if (this.$page.title == "aws-rds-microsoft-sql-server-2014-stig-baseline"){
      return aws_rds_microsoft_sql_server_2014_stig.controls;
      }
      if (this.$page.title == "cis-docker-community-edition-baseline"){
      return cis_docker.controls;
      }
      if (this.$page.title == "red-hat-jboss-eap-6.3-stig-baseline"){
      return jboss_profile.controls;
      }
      if (this.$page.title == "oracle-java-runtime-environment-8-unix-stig-baseline"){
      return jre8.controls;
      }
      if (this.$page.title == "oracle-java-runtime-environment-7-unix-stig-baseline"){
      return jre7.controls;
      }
      if (this.$page.title == "aws-rds-postgres-9-stig-baseline"){
      return aws_rds_postgres_stig.controls;
      }
      if (this.$page.title == "microsoft-windows-2012r2-memberserver-stig-baseline"){
      return microsoft_server_2012r2.controls;
      }
      if (this.$page.title == "mongodb-enterprise-advanced-stig-baseline"){
      return mongodb_stig.controls;
      }
      if (this.$page.title == "cis-apache-tomcat-benchmark-7"){
      return apache_tomcat_7.controls;
      }
      if (this.$page.title == "cis-aws-rds-mysql-server-enterprise-v5.7-baseline"){
      return aws_oracle_microsoft_sql_cis.controls;
      }
      if (this.$page.title == "stig-microsoft-windows-server-2016-v1r4-baseline"){
      return microsoft_server_2016.controls;
      }
      if (this.$page.title == "aws-s3-baseline"){
      return aws_s3.controls;
      }
      if (this.$page.title == "cis-kubernetes-benchmark"){
      return cis_kubernetes.controls;
      }
      if (this.$page.title == "cis-aws-rds-infrastructure-baseline"){
      return aws_rds_infrastructure.controls;
      }
      


    },
    profile() {
      if (this.$page.title == "nginx-baseline"){
      return nginx_profile;
      }
      if (this.$page.title == "red-hat-enterprise-linux-6-stig-baseline"){
      return redhat6_stig;
      }
      if (this.$page.title == "oracle-database-12c-stig-baseline"){
      return oracle12c_stig;
      }
      if (this.$page.title == "rsa-archer-6-security-configuration-guide-baseline"){
      return rsa_archer6;
      }
      if (this.$page.title == "microsoft-sql-server-2014-database-stig-baseline"){
      return microsoft_sql_server_2014_database;
      }
      if (this.$page.title == "cis-apache-tomcat-benchmark-8"){
      return apache_tomcat_8;
      }
      if (this.$page.title == "cis-aws-foundations-baseline"){
      return cis_aws_foundations;
      }
      if (this.$page.title == "stig-canonical-ubuntu-16.04-lts-baseline"){
      return ubuntu_stig;
      }
      if (this.$page.title == "microsoft-sql-server-2014-instance-stig-baseline"){
      return microsoft_sql_server_2014_instance;
      }
      if (this.$page.title == "microsoft-iis-8.5-server-stig-baseline"){
      return microsoft_iis_server_stig;
      }
      if (this.$page.title == "microsoft-iis-8.5-site-stig-baseline"){
      return microsoft_iis_site_stig;
      }
      if (this.$page.title == "Oracle-MySQL-Enterprise-Edition-5.7-cis-baseline"){
      return oracle_microsoft_sql_cis;
      }
      if (this.$page.title == "aws-rds-microsoft-sql-server-2014-stig-baseline"){
      return aws_rds_microsoft_sql_server_2014_stig;
      }
      if (this.$page.title == "cis-docker-community-edition-baseline"){
      return cis_docker;
      }
      if (this.$page.title == "red-hat-jboss-eap-6.3-stig-baseline"){
      return jboss_profile;
      }
      if (this.$page.title == "oracle-java-runtime-environment-8-unix-stig-baseline"){
      return jre8;
      }
      if (this.$page.title == "oracle-java-runtime-environment-7-unix-stig-baseline"){
      return jre7;
      }
      if (this.$page.title == "aws-rds-postgres-9-stig-baseline"){
      return aws_rds_postgres_stig;
      }
      if (this.$page.title == "microsoft-windows-2012r2-memberserver-stig-baseline"){
      return microsoft_server_2012r2;
      }
      if (this.$page.title == "mongodb-enterprise-advanced-stig-baseline"){
      return mongodb_stig;
      }
      if (this.$page.title == "cis-apache-tomcat-benchmark-7"){
      return apache_tomcat_7;
      }
      if (this.$page.title == "cis-aws-rds-mysql-server-enterprise-v5.7-baseline"){
      return aws_oracle_microsoft_sql_cis;
      }
      if (this.$page.title == "stig-microsoft-windows-server-2016-v1r4-baseline"){
      return microsoft_server_2016;
      }
      if (this.$page.title == "aws-s3-baseline"){
      return aws_s3.controls;
      }
      if (this.$page.title == "cis-kubernetes-benchmark"){
      return cis_kubernetes;
      }
      if (this.$page.title == "cis-aws-rds-infrastructure-baseline"){
      return aws_rds_infrastructure;
      }
     
     
      
    },
    showModal() {
      return sharedData.showModal;
    },
    selectedHistoryRow() {
      return sharedData.selectedHistoryRow;
    },
    test(){
    return this.$page.title;
    },
    file(){
    return "../assets/" + this.$page.title + '.json'
    }
  }
};
</script>
<style>
th#a {
  background-color: black;
  color: white;
  width: 30446666666888888999999px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
}
th#b {
  background-color: black;
  color: white;
  width: 10px;
  font-size: 0.8em;
  letter-spacing: 3px;
  font-weight: bold;
}
tr {
  page-break-inside: avoid;
  font-size: 15px;
  line-height: 1.6;
  max-width: 100%;
  overflow: auto;
  display: block;
  word-wrap: break-word;
  text-align: left;
  scolor: black;
}
tr#a {
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 6em;
  color: black;
}

td#a {
  color: black;
  text-alight: left;
  background: white;
}

td#b {
  color: black;
  width: 200%;
}
td#c {
  background: #444;
  color: white;
  padding: 1em;
  margin: 1em 0 8px 0;
  border: none;
  font-family: monospace;
}
tr#d {
  display: inline-block;
  background: #444;
  color: white;
  font-size: 0.7em;
  padding: 2px 10px 3px 10px;
  border-radius: 1em;
  margin: 1.5em 0;
}

</style>
